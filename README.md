# Framer Bouncy Bars Module

A Framer module that will generate a row of bars that bounce up and down randomly. Use it for creating a fake graphic equalizer! Use it for… I don't know, actually. Nevermind.

## Include the module in your Framer project

1. Grab `bouncybars.coffee` from this repo's `/modules` directory
2. Put it into your Framer Studio project's  `/modules` directory. 
3. Then, in your Framer prototype, require the module with this line:

```coffeescript
{BouncyBars} = require "bouncybars"
```

## Make some bouncy bars

You can set the number of bars, the height and width of the bars, the padding between them, the color of the bars, and the relative speed at which they bounce.

```coffeescript
theBars = new BouncyBars
  barHeight: 100 # starting height of the bars
  barWidth: 10 # width of each bar
  barPadding: 5 # distance between bars
  barColor: "#fff" # color of the bars
  bars: 20 # number of bars to display
  speed: 10 # relative speed of the animation - default value is 20
```

## Keep bouncing

![Bouncy Bars Yay](https://raw.githubusercontent.com/stakes/Framer-BouncyBars/master/gif.gif)
