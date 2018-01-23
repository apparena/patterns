import React from 'react';
import {Card} from 'apparena-patterns-react';

const title = 'Blog & Newsletter';

function render() {
    const head = document.getElementsByTagName('head')[0];
    const alreadyInserted = Array.from(head.children).filter((child) => {
        return child.id === 'aa-css';
    }).length;

    if (!alreadyInserted) {
        const link = document.createElement('link');
        link.id = 'aa-css';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/dist/styles/corporate-identity.css';
        head.appendChild(link);
    }

    return (
        <div>
            <Card>
                <div type="card-header">
                    Newsletter
                </div>
                <div type="card-body">
                    <p>
                        Diverse Richtlinien für die Erstellung, den Versand und die Nachbearbeitung der Newsletter wurde
                        bereits
                        im Wiki festgehalten: https://wiki.app-arena.com/display/MKT/Newsletter-Prozess+2017
                    </p>
                </div>
            </Card>,
            <Card>
                <div type="card-header">
                    Blog
                </div>
                <div type="card-body">
                    <h3>Richtlinien zum Verfassen von Blog-Beiträgen</h3>
                    <ul>
                        <li>Immer 3-6 Subheads verwenden</li>
                        <li>Subhead immer Überschrift 3</li>
                        <li>Einleitung immer kursiv und fett / 2-4 Zeilen</li>
                        <li>Optimal: 1-3 Bilder pro Artikel</li>
                        <li>Bilder können via Shutterstock in Größe M (1000x667) bezogen werden (Login via Grafiker
                            anfragen)
                        </li>
                        <li>Größe der Blogbilder immer einheitlich halten: am besten 768x491 Pixel</li>
                        <li>Immer ein Fazit schreiben</li>
                        <li>Zwischen Einleitung und erstem Subhead 1 Zeilenabstand</li>
                        <li>Zwischen Subheads kein Zeilenabstand</li>
                        <li>“Keywords” hervorheben</li>
                        <li>5 Schlagwörter pro Artikel</li>
                        <li>Immer einen Bezug zu unseren Produkten schaffen, d. h. immer auf Produkte verlinken, die
                            thematisch
                            passen
                        </li>
                        <li>Immer auf weitere Artikeln verlinken, die thematisch passen</li>
                    </ul>
                </div>
            </Card>
        </div>
    );
}

export default {
    title,
    render
};