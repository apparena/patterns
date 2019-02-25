import * as React from "react";

declare var window: {
  AAPlatform: {
    configs: {
      [key: string]: any;
    };
    infos: { [key: string]: string };
    translations: {
      [key: string]: string;
    };
  };
};
/**
 * Props that are required to use this HOC
 */
export interface IToolkit {
  getConfigValue<T>(id: string): T;
  getInfoValue(id: string): string;
  translate(id: string, args?: string[]): string;
}

/**
 * This is an Higher-Order-Component which adds three new functions to a component
 * so the component can access easily the platform data like config values and translations
 */
export const toolkit = <P extends IToolkit>(
  COMPONENT: React.ComponentType<P>
) =>
  class ToolkitComponent extends React.Component<P, IToolkit> {
    public getInfoValue = (id: string): string | boolean => {
      if (window.AAPlatform && window.AAPlatform.infos && window.AAPlatform.infos[id] !== undefined) {
        return window.AAPlatform.infos[id];
      }
      return false;
    };

    public translate = (id: string, args?: string[]): string => {
      if (window.AAPlatform && window.AAPlatform.translations && window.AAPlatform.translations[id] !== undefined) {
        if (!args || args.length === 0) {
          return window.AAPlatform.translations[id];
        }
        if (args.length === 1) {
          return window.AAPlatform.translations[id].replace("%s", args[0]);
        }
        if (args.length === 2) {
          const part1: string = window.AAPlatform.translations[id].replace(
            "%s",
            args[0]
          );

          return part1.replace("%s", args[1]);
        }
        if (args.length === 3) {
          const part1: string = window.AAPlatform.translations[id].replace(
            "%s",
            args[0]
          );

          const part2: string = part1.replace("%s", args[1]);

          return part2.replace("%s", args[2]);
        }
      }
      return id;
    };

    public getConfigValue(id: string) {
      if (window.AAPlatform && window.AAPlatform.configs && window.AAPlatform.configs[id] !== undefined &&  window.AAPlatform.configs[id] !== null) {
        return window.AAPlatform.configs[id];
      }
      return false;
    };

    public render() {
      return (
        <COMPONENT
          {...this.props}
          translate={this.translate}
          getConfigValue={this.getConfigValue}
          getInfoValue={this.getInfoValue}
        />
      );
    }
  };
