require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"bouncybars":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.BouncyBars = (function(superClass) {
  extend(BouncyBars, superClass);

  function BouncyBars(options) {
    var bar, i, j, ref;
    if (options == null) {
      options = {};
    }
    this.bars = options.bars ? options.bars : 3;
    this.barsHeight = options.barHeight ? options.barHeight : 25;
    this.barsWidth = options.barWidth ? options.barWidth : 6;
    this.barsPadding = options.barPadding ? options.barPadding : 3;
    this.barsColor = options.barColor ? options.barColor : "#fff";
    this.speed = options.speed ? options.speed : 20;
    BouncyBars.__super__.constructor.call(this, {
      height: this.barsHeight,
      width: (this.barsWidth + this.barsPadding) * this.bars,
      backgroundColor: null
    });
    for (i = j = 1, ref = this.bars; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      bar = new Layer({
        superLayer: this,
        width: this.barsWidth,
        height: this.barsHeight,
        backgroundColor: this.barsColor,
        x: (this.barsWidth + this.barsPadding) * (i - 1),
        originY: 1
      });
      this.animateDown(bar);
    }
  }

  BouncyBars.prototype.animateUp = function(target) {
    var animation, rand, scale, time;
    rand = Utils.randomNumber(1, 10);
    time = Utils.round(rand / this.speed, 2);
    scale = Utils.round(1 - rand / 10, 2);
    animation = new Animation({
      layer: target,
      properties: {
        scaleY: scale
      },
      time: time
    });
    animation.on(Events.AnimationEnd, (function(_this) {
      return function() {
        return _this.animateDown(target);
      };
    })(this));
    return animation.start();
  };

  BouncyBars.prototype.animateDown = function(target) {
    var animation, rand, scale, time;
    rand = Utils.randomNumber(1, 10);
    time = Utils.round(rand / this.speed, 2);
    scale = Utils.round(rand / 10, 2);
    animation = new Animation({
      layer: target,
      properties: {
        scaleY: time
      },
      time: time
    });
    animation.on(Events.AnimationEnd, (function(_this) {
      return function() {
        return _this.animateUp(target);
      };
    })(this));
    return animation.start();
  };

  return BouncyBars;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamF5c3Rha2Vsb24vRHJvcGJveCAoUGVyc29uYWwpL0NvZGUvRnJhbWVyLUJhcnMvZXhhbXBsZXMvYmFycy5mcmFtZXIvbW9kdWxlcy9ib3VuY3liYXJzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUE7OztBQUFNLE9BQU8sQ0FBQzs7O0VBRUMsb0JBQUMsT0FBRDtBQUVYLFFBQUE7O01BRlksVUFBUTs7SUFFcEIsSUFBQyxDQUFBLElBQUQsR0FBVyxPQUFPLENBQUMsSUFBWCxHQUFxQixPQUFPLENBQUMsSUFBN0IsR0FBdUM7SUFDL0MsSUFBQyxDQUFBLFVBQUQsR0FBaUIsT0FBTyxDQUFDLFNBQVgsR0FBMEIsT0FBTyxDQUFDLFNBQWxDLEdBQWlEO0lBQy9ELElBQUMsQ0FBQSxTQUFELEdBQWdCLE9BQU8sQ0FBQyxRQUFYLEdBQXlCLE9BQU8sQ0FBQyxRQUFqQyxHQUErQztJQUM1RCxJQUFDLENBQUEsV0FBRCxHQUFrQixPQUFPLENBQUMsVUFBWCxHQUEyQixPQUFPLENBQUMsVUFBbkMsR0FBbUQ7SUFDbEUsSUFBQyxDQUFBLFNBQUQsR0FBZ0IsT0FBTyxDQUFDLFFBQVgsR0FBeUIsT0FBTyxDQUFDLFFBQWpDLEdBQStDO0lBQzVELElBQUMsQ0FBQSxLQUFELEdBQVksT0FBTyxDQUFDLEtBQVgsR0FBc0IsT0FBTyxDQUFDLEtBQTlCLEdBQXlDO0lBRWxELDRDQUNFO01BQUEsTUFBQSxFQUFRLElBQUMsQ0FBQSxVQUFUO01BQ0EsS0FBQSxFQUFPLENBQUMsSUFBQyxDQUFBLFNBQUQsR0FBVyxJQUFDLENBQUEsV0FBYixDQUFBLEdBQTBCLElBQUMsQ0FBQSxJQURsQztNQUVBLGVBQUEsRUFBaUIsSUFGakI7S0FERjtBQUtBLFNBQVMsb0ZBQVQ7TUFDRSxHQUFBLEdBQVUsSUFBQSxLQUFBLENBQ1I7UUFBQSxVQUFBLEVBQVksSUFBWjtRQUNBLEtBQUEsRUFBTyxJQUFDLENBQUEsU0FEUjtRQUVBLE1BQUEsRUFBUSxJQUFDLENBQUEsVUFGVDtRQUdBLGVBQUEsRUFBaUIsSUFBQyxDQUFBLFNBSGxCO1FBSUEsQ0FBQSxFQUFHLENBQUMsSUFBQyxDQUFBLFNBQUQsR0FBVyxJQUFDLENBQUEsV0FBYixDQUFBLEdBQTRCLENBQUMsQ0FBQSxHQUFFLENBQUgsQ0FKL0I7UUFLQSxPQUFBLEVBQVMsQ0FMVDtPQURRO01BT1YsSUFBQyxDQUFBLFdBQUQsQ0FBYSxHQUFiO0FBUkY7RUFkVzs7dUJBd0JiLFNBQUEsR0FBVyxTQUFDLE1BQUQ7QUFDVCxRQUFBO0lBQUEsSUFBQSxHQUFPLEtBQUssQ0FBQyxZQUFOLENBQW1CLENBQW5CLEVBQXNCLEVBQXRCO0lBQ1AsSUFBQSxHQUFPLEtBQUssQ0FBQyxLQUFOLENBQVksSUFBQSxHQUFLLElBQUMsQ0FBQSxLQUFsQixFQUF5QixDQUF6QjtJQUNQLEtBQUEsR0FBUSxLQUFLLENBQUMsS0FBTixDQUFhLENBQUEsR0FBSSxJQUFBLEdBQUssRUFBdEIsRUFBMkIsQ0FBM0I7SUFDUixTQUFBLEdBQWdCLElBQUEsU0FBQSxDQUNkO01BQUEsS0FBQSxFQUFPLE1BQVA7TUFDQSxVQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsS0FBUjtPQUZGO01BR0EsSUFBQSxFQUFNLElBSE47S0FEYztJQUtoQixTQUFTLENBQUMsRUFBVixDQUFhLE1BQU0sQ0FBQyxZQUFwQixFQUFrQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFDaEMsS0FBQyxDQUFBLFdBQUQsQ0FBYSxNQUFiO01BRGdDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFsQztXQUVBLFNBQVMsQ0FBQyxLQUFWLENBQUE7RUFYUzs7dUJBYVgsV0FBQSxHQUFhLFNBQUMsTUFBRDtBQUNYLFFBQUE7SUFBQSxJQUFBLEdBQU8sS0FBSyxDQUFDLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0IsRUFBdEI7SUFDUCxJQUFBLEdBQU8sS0FBSyxDQUFDLEtBQU4sQ0FBWSxJQUFBLEdBQUssSUFBQyxDQUFBLEtBQWxCLEVBQXlCLENBQXpCO0lBQ1AsS0FBQSxHQUFRLEtBQUssQ0FBQyxLQUFOLENBQVksSUFBQSxHQUFLLEVBQWpCLEVBQXFCLENBQXJCO0lBQ1IsU0FBQSxHQUFnQixJQUFBLFNBQUEsQ0FDZDtNQUFBLEtBQUEsRUFBTyxNQUFQO01BQ0EsVUFBQSxFQUNFO1FBQUEsTUFBQSxFQUFRLElBQVI7T0FGRjtNQUdBLElBQUEsRUFBTSxJQUhOO0tBRGM7SUFLaEIsU0FBUyxDQUFDLEVBQVYsQ0FBYSxNQUFNLENBQUMsWUFBcEIsRUFBa0MsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFBO2VBQ2hDLEtBQUMsQ0FBQSxTQUFELENBQVcsTUFBWDtNQURnQztJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbEM7V0FFQSxTQUFTLENBQUMsS0FBVixDQUFBO0VBWFc7Ozs7R0F2Q2tCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIGV4cG9ydHMuQm91bmN5QmFycyBleHRlbmRzIExheWVyXG5cbiAgY29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXG4gICAgQGJhcnMgPSBpZiBvcHRpb25zLmJhcnMgdGhlbiBvcHRpb25zLmJhcnMgZWxzZSAzXG4gICAgQGJhcnNIZWlnaHQgPSBpZiBvcHRpb25zLmJhckhlaWdodCB0aGVuIG9wdGlvbnMuYmFySGVpZ2h0IGVsc2UgMjVcbiAgICBAYmFyc1dpZHRoID0gaWYgb3B0aW9ucy5iYXJXaWR0aCB0aGVuIG9wdGlvbnMuYmFyV2lkdGggZWxzZSA2XG4gICAgQGJhcnNQYWRkaW5nID0gaWYgb3B0aW9ucy5iYXJQYWRkaW5nIHRoZW4gb3B0aW9ucy5iYXJQYWRkaW5nIGVsc2UgM1xuICAgIEBiYXJzQ29sb3IgPSBpZiBvcHRpb25zLmJhckNvbG9yIHRoZW4gb3B0aW9ucy5iYXJDb2xvciBlbHNlIFwiI2ZmZlwiXG4gICAgQHNwZWVkID0gaWYgb3B0aW9ucy5zcGVlZCB0aGVuIG9wdGlvbnMuc3BlZWQgZWxzZSAyMFxuXG4gICAgc3VwZXJcbiAgICAgIGhlaWdodDogQGJhcnNIZWlnaHRcbiAgICAgIHdpZHRoOiAoQGJhcnNXaWR0aCtAYmFyc1BhZGRpbmcpKkBiYXJzXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuICAgIGZvciBpIGluIFsxLi5AYmFyc11cbiAgICAgIGJhciA9IG5ldyBMYXllclxuICAgICAgICBzdXBlckxheWVyOiBAXG4gICAgICAgIHdpZHRoOiBAYmFyc1dpZHRoXG4gICAgICAgIGhlaWdodDogQGJhcnNIZWlnaHRcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBAYmFyc0NvbG9yXG4gICAgICAgIHg6IChAYmFyc1dpZHRoK0BiYXJzUGFkZGluZykgKiAoaS0xKVxuICAgICAgICBvcmlnaW5ZOiAxXG4gICAgICBAYW5pbWF0ZURvd24gYmFyXG5cbiAgYW5pbWF0ZVVwOiAodGFyZ2V0KSAtPlxuICAgIHJhbmQgPSBVdGlscy5yYW5kb21OdW1iZXIgMSwgMTBcbiAgICB0aW1lID0gVXRpbHMucm91bmQgcmFuZC9Ac3BlZWQsIDJcbiAgICBzY2FsZSA9IFV0aWxzLnJvdW5kICgxIC0gcmFuZC8xMCksIDJcbiAgICBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uXG4gICAgICBsYXllcjogdGFyZ2V0XG4gICAgICBwcm9wZXJ0aWVzOiBcbiAgICAgICAgc2NhbGVZOiBzY2FsZVxuICAgICAgdGltZTogdGltZVxuICAgIGFuaW1hdGlvbi5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PlxuICAgICAgQGFuaW1hdGVEb3duIHRhcmdldFxuICAgIGFuaW1hdGlvbi5zdGFydCgpXG4gICAgXG4gIGFuaW1hdGVEb3duOiAodGFyZ2V0KSAtPlxuICAgIHJhbmQgPSBVdGlscy5yYW5kb21OdW1iZXIgMSwgMTBcbiAgICB0aW1lID0gVXRpbHMucm91bmQgcmFuZC9Ac3BlZWQsIDJcbiAgICBzY2FsZSA9IFV0aWxzLnJvdW5kIHJhbmQvMTAsIDJcbiAgICBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uXG4gICAgICBsYXllcjogdGFyZ2V0XG4gICAgICBwcm9wZXJ0aWVzOiBcbiAgICAgICAgc2NhbGVZOiB0aW1lXG4gICAgICB0aW1lOiB0aW1lXG4gICAgYW5pbWF0aW9uLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+XG4gICAgICBAYW5pbWF0ZVVwIHRhcmdldFxuICAgIGFuaW1hdGlvbi5zdGFydCgpIl19
