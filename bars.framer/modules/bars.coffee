class exports.Bars extends Layer

  constructor: (options={}) ->

    bars = if options.bars then options.bars else 3
    barsHeight = if options.barHeight then options.barHeight else 25
    barsWidth = if options.barWidth then options.barWidth else 6
    barsPadding = if options.barPadding then options.barPadding else 3
    barsColor = if options.barColor then options.barColor else "#fff"

    super
      height: barsHeight
      width: (barsWidth+barsPadding)*bars
      backgroundColor: null

    for i in [1..bars]
      bar = new Layer
        superLayer: @
        width: barsWidth
        height: barsHeight
        backgroundColor: barsColor
        x: (barsWidth+barsPadding) * (i-1)
        originY: 1
      @animateDown bar

  animateUp: (target) ->
    rand = Utils.randomNumber 1, 10
    time = Utils.round rand/20, 2
    scale = Utils.round (1 - rand/10), 2
    animation = new Animation
      layer: target
      properties: 
        scaleY: scale
      time: time
    animation.on Events.AnimationEnd, =>
      @animateDown target
    animation.start()
    
  animateDown: (target) ->
    rand = Utils.randomNumber 1, 10
    time = Utils.round rand/20, 2
    scale = Utils.round rand/10, 2
    animation = new Animation
      layer: target
      properties: 
        scaleY: time
      time: time
    animation.on Events.AnimationEnd, =>
      @animateUp target
    animation.start()

