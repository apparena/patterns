### What problem does this solve?

Spinners are used for showing a system process of unknown length going on that ends with the system displaying results to the user.

### When and how to use this pattern?

Spinners give users feedback that one of their actions has triggered a system response that might only become visible after a short period of time. However, the use of spinners should be kept to a minimum as it still means wait time for the user.
The main decisions around spinners are about their trigger and their location on the screen:
- If pressing a button triggers its appearance, place it next to the button, or the group of buttons. Disable the buttons while the spinner is visible
- If by some user interaction a new content area appears or an already existing area gets updated, the spinner is usually shown in the respective area
- For most other cases, place the spinner where you want the user's attention to be when the system process is finished
- Only show a spinner if the expected wait time is more than a second
- Spinner sizes: use 'small' to show next to buttons; use 'medium' for small content panels; use 'large' for updates of significant parts of the screen


### What happens if…

- … it takes several seconds for the system to figure out how large the overall system process will be to show an accurate progress bar? Using exactly the same space that would be taken up by the animated progress bar, show an 'indeterminate progress bar' (see example below). Once there is enough information available to show an accurate progress bar, display it instead of the indeterminate progress bar. Never use the spinner in preparation of the progress bar.
