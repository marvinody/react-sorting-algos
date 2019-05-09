# Sorting Algos Visualized
## only for the millionth time

## My attempt at making visualization of sorting algorithms
Pretty simple idea, pretty weird execution.
Since I was unsure of how to halt state and let the dom render once elements have been swapped or set, I leaned to function generators. The yields allow me to stop execution until I have waited some amount of time for the dom to render. It feels super hacky to use yield, and async alongside each other but that's the format I went for.
I'm not sure if there's another much simpler way of doing this (**there probably is**) but this is what I got.
