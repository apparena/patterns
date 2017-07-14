---
title: Progress Tracker
---

### What problem does this solve?

A progress tracker guides users through a number of steps across multiple screens in order to complete a task flow. It shows users where they are in the process, and also offers navigation within the process.

### When and how to use this pattern?

The multi-step progress tracker pattern can be used in combination with other patterns like Focused tasks.
The progress tracker consists of a number of items, represented visually, that guide users through the flow. Each progress tracker has:
- Multiple 'steps', represented by circles
- Labels for each step: a good label would consist of one or two succinct words, describing the main purpose of the step in sufficient detail
- Three types of labels:
    - Currently active: this is the label of the screen users are currently on
    - Still to come: labels of screens users have not visited yet. They are somewhat subdued, as users cannot access them yet
    - Already visited: these labels are clickable links, so users can use them to navigate around a process
- A line between each step: suggesting to users that they are moving forward in the process

### What happens if…
**…there are more steps in a process than you can fit into the space provided:**

Consider the following options:
- Merge some of the screens: ask yourself whether it would really help users in their understanding of the process to move from one screen to the next, or whether it could simply be dealt with by a longer page
- Associate several screens with one step: although not ideal, sometimes several screens can belong to one broader step, for example, a "Review" step could show a screen with product information and then a screen with payment information. If you opt for this solution, simply leave the same step active when users move forward. Try to vary the headline of each screen so that it shows that the step is the same, but not the screen

**…choices earlier in the process can change later steps in the process:**

In most cases, identifying the general theme of each step helps to find a new label that can work even when details in the process change. You might also have to combine this solution with connecting several screens to one step (above).
Example: You have a check-out process, and depending on whether users want to buy a digital item or a physical item, they might or might not have to enter their shipping details but will always have to enter payment details. Looking forward in the process, the step could be called "Your details" which can then either only be connected to the payment screen, or the payment and the shipping details screen.