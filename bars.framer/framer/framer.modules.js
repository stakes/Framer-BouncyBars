require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"bars":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.Bars = (function(superClass) {
  extend(Bars, superClass);

  function Bars(options) {
    var bar, bars, barsColor, barsHeight, barsPadding, barsWidth, i, j, ref;
    if (options == null) {
      options = {};
    }
    bars = options.bars ? options.bars : 3;
    barsHeight = options.barHeight ? options.barHeight : 25;
    barsWidth = options.barWidth ? options.barWidth : 6;
    barsPadding = options.barPadding ? options.barPadding : 3;
    barsColor = options.barColor ? options.barColor : "#fff";
    Bars.__super__.constructor.call(this, {
      height: barsHeight,
      width: (barsWidth + barsPadding) * bars,
      backgroundColor: null
    });
    for (i = j = 1, ref = bars; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
      bar = new Layer({
        superLayer: this,
        width: barsWidth,
        height: barsHeight,
        backgroundColor: barsColor,
        x: (barsWidth + barsPadding) * (i - 1),
        originY: 1
      });
      this.animateDown(bar);
    }
  }

  Bars.prototype.animateUp = function(target) {
    var animation, rand, scale, time;
    rand = Utils.randomNumber(1, 10);
    time = Utils.round(rand / 20, 2);
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

  Bars.prototype.animateDown = function(target) {
    var animation, rand, scale, time;
    rand = Utils.randomNumber(1, 10);
    time = Utils.round(rand / 20, 2);
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

  return Bars;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamF5c3Rha2Vsb24vRHJvcGJveCAoUGVyc29uYWwpL0NvZGUvRnJhbWVyLUJhcnMvYmFycy5mcmFtZXIvbW9kdWxlcy9iYXJzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUE7OztBQUFNLE9BQU8sQ0FBQzs7O0VBRUMsY0FBQyxPQUFEO0FBRVgsUUFBQTs7TUFGWSxVQUFROztJQUVwQixJQUFBLEdBQVUsT0FBTyxDQUFDLElBQVgsR0FBcUIsT0FBTyxDQUFDLElBQTdCLEdBQXVDO0lBQzlDLFVBQUEsR0FBZ0IsT0FBTyxDQUFDLFNBQVgsR0FBMEIsT0FBTyxDQUFDLFNBQWxDLEdBQWlEO0lBQzlELFNBQUEsR0FBZSxPQUFPLENBQUMsUUFBWCxHQUF5QixPQUFPLENBQUMsUUFBakMsR0FBK0M7SUFDM0QsV0FBQSxHQUFpQixPQUFPLENBQUMsVUFBWCxHQUEyQixPQUFPLENBQUMsVUFBbkMsR0FBbUQ7SUFDakUsU0FBQSxHQUFlLE9BQU8sQ0FBQyxRQUFYLEdBQXlCLE9BQU8sQ0FBQyxRQUFqQyxHQUErQztJQUUzRCxzQ0FDRTtNQUFBLE1BQUEsRUFBUSxVQUFSO01BQ0EsS0FBQSxFQUFPLENBQUMsU0FBQSxHQUFVLFdBQVgsQ0FBQSxHQUF3QixJQUQvQjtNQUVBLGVBQUEsRUFBaUIsSUFGakI7S0FERjtBQUtBLFNBQVMsK0VBQVQ7TUFDRSxHQUFBLEdBQVUsSUFBQSxLQUFBLENBQ1I7UUFBQSxVQUFBLEVBQVksSUFBWjtRQUNBLEtBQUEsRUFBTyxTQURQO1FBRUEsTUFBQSxFQUFRLFVBRlI7UUFHQSxlQUFBLEVBQWlCLFNBSGpCO1FBSUEsQ0FBQSxFQUFHLENBQUMsU0FBQSxHQUFVLFdBQVgsQ0FBQSxHQUEwQixDQUFDLENBQUEsR0FBRSxDQUFILENBSjdCO1FBS0EsT0FBQSxFQUFTLENBTFQ7T0FEUTtNQU9WLElBQUMsQ0FBQSxXQUFELENBQWEsR0FBYjtBQVJGO0VBYlc7O2lCQXVCYixTQUFBLEdBQVcsU0FBQyxNQUFEO0FBQ1QsUUFBQTtJQUFBLElBQUEsR0FBTyxLQUFLLENBQUMsWUFBTixDQUFtQixDQUFuQixFQUFzQixFQUF0QjtJQUNQLElBQUEsR0FBTyxLQUFLLENBQUMsS0FBTixDQUFZLElBQUEsR0FBSyxFQUFqQixFQUFxQixDQUFyQjtJQUNQLEtBQUEsR0FBUSxLQUFLLENBQUMsS0FBTixDQUFhLENBQUEsR0FBSSxJQUFBLEdBQUssRUFBdEIsRUFBMkIsQ0FBM0I7SUFDUixTQUFBLEdBQWdCLElBQUEsU0FBQSxDQUNkO01BQUEsS0FBQSxFQUFPLE1BQVA7TUFDQSxVQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsS0FBUjtPQUZGO01BR0EsSUFBQSxFQUFNLElBSE47S0FEYztJQUtoQixTQUFTLENBQUMsRUFBVixDQUFhLE1BQU0sQ0FBQyxZQUFwQixFQUFrQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFDaEMsS0FBQyxDQUFBLFdBQUQsQ0FBYSxNQUFiO01BRGdDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFsQztXQUVBLFNBQVMsQ0FBQyxLQUFWLENBQUE7RUFYUzs7aUJBYVgsV0FBQSxHQUFhLFNBQUMsTUFBRDtBQUNYLFFBQUE7SUFBQSxJQUFBLEdBQU8sS0FBSyxDQUFDLFlBQU4sQ0FBbUIsQ0FBbkIsRUFBc0IsRUFBdEI7SUFDUCxJQUFBLEdBQU8sS0FBSyxDQUFDLEtBQU4sQ0FBWSxJQUFBLEdBQUssRUFBakIsRUFBcUIsQ0FBckI7SUFDUCxLQUFBLEdBQVEsS0FBSyxDQUFDLEtBQU4sQ0FBWSxJQUFBLEdBQUssRUFBakIsRUFBcUIsQ0FBckI7SUFDUixTQUFBLEdBQWdCLElBQUEsU0FBQSxDQUNkO01BQUEsS0FBQSxFQUFPLE1BQVA7TUFDQSxVQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsSUFBUjtPQUZGO01BR0EsSUFBQSxFQUFNLElBSE47S0FEYztJQUtoQixTQUFTLENBQUMsRUFBVixDQUFhLE1BQU0sQ0FBQyxZQUFwQixFQUFrQyxDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFDaEMsS0FBQyxDQUFBLFNBQUQsQ0FBVyxNQUFYO01BRGdDO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFsQztXQUVBLFNBQVMsQ0FBQyxLQUFWLENBQUE7RUFYVzs7OztHQXRDWSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBleHBvcnRzLkJhcnMgZXh0ZW5kcyBMYXllclxuXG4gIGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblxuICAgIGJhcnMgPSBpZiBvcHRpb25zLmJhcnMgdGhlbiBvcHRpb25zLmJhcnMgZWxzZSAzXG4gICAgYmFyc0hlaWdodCA9IGlmIG9wdGlvbnMuYmFySGVpZ2h0IHRoZW4gb3B0aW9ucy5iYXJIZWlnaHQgZWxzZSAyNVxuICAgIGJhcnNXaWR0aCA9IGlmIG9wdGlvbnMuYmFyV2lkdGggdGhlbiBvcHRpb25zLmJhcldpZHRoIGVsc2UgNlxuICAgIGJhcnNQYWRkaW5nID0gaWYgb3B0aW9ucy5iYXJQYWRkaW5nIHRoZW4gb3B0aW9ucy5iYXJQYWRkaW5nIGVsc2UgM1xuICAgIGJhcnNDb2xvciA9IGlmIG9wdGlvbnMuYmFyQ29sb3IgdGhlbiBvcHRpb25zLmJhckNvbG9yIGVsc2UgXCIjZmZmXCJcblxuICAgIHN1cGVyXG4gICAgICBoZWlnaHQ6IGJhcnNIZWlnaHRcbiAgICAgIHdpZHRoOiAoYmFyc1dpZHRoK2JhcnNQYWRkaW5nKSpiYXJzXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblxuICAgIGZvciBpIGluIFsxLi5iYXJzXVxuICAgICAgYmFyID0gbmV3IExheWVyXG4gICAgICAgIHN1cGVyTGF5ZXI6IEBcbiAgICAgICAgd2lkdGg6IGJhcnNXaWR0aFxuICAgICAgICBoZWlnaHQ6IGJhcnNIZWlnaHRcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYXJzQ29sb3JcbiAgICAgICAgeDogKGJhcnNXaWR0aCtiYXJzUGFkZGluZykgKiAoaS0xKVxuICAgICAgICBvcmlnaW5ZOiAxXG4gICAgICBAYW5pbWF0ZURvd24gYmFyXG5cbiAgYW5pbWF0ZVVwOiAodGFyZ2V0KSAtPlxuICAgIHJhbmQgPSBVdGlscy5yYW5kb21OdW1iZXIgMSwgMTBcbiAgICB0aW1lID0gVXRpbHMucm91bmQgcmFuZC8yMCwgMlxuICAgIHNjYWxlID0gVXRpbHMucm91bmQgKDEgLSByYW5kLzEwKSwgMlxuICAgIGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25cbiAgICAgIGxheWVyOiB0YXJnZXRcbiAgICAgIHByb3BlcnRpZXM6IFxuICAgICAgICBzY2FsZVk6IHNjYWxlXG4gICAgICB0aW1lOiB0aW1lXG4gICAgYW5pbWF0aW9uLm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+XG4gICAgICBAYW5pbWF0ZURvd24gdGFyZ2V0XG4gICAgYW5pbWF0aW9uLnN0YXJ0KClcbiAgICBcbiAgYW5pbWF0ZURvd246ICh0YXJnZXQpIC0+XG4gICAgcmFuZCA9IFV0aWxzLnJhbmRvbU51bWJlciAxLCAxMFxuICAgIHRpbWUgPSBVdGlscy5yb3VuZCByYW5kLzIwLCAyXG4gICAgc2NhbGUgPSBVdGlscy5yb3VuZCByYW5kLzEwLCAyXG4gICAgYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvblxuICAgICAgbGF5ZXI6IHRhcmdldFxuICAgICAgcHJvcGVydGllczogXG4gICAgICAgIHNjYWxlWTogdGltZVxuICAgICAgdGltZTogdGltZVxuICAgIGFuaW1hdGlvbi5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PlxuICAgICAgQGFuaW1hdGVVcCB0YXJnZXRcbiAgICBhbmltYXRpb24uc3RhcnQoKVxuXG4iXX0=
