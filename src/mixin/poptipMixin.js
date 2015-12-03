module.exports = {
  props:{
    placement:{
      type:String,
      default:'top'
    },
    show:{
      type:Boolean,
      default:false
    }
  },
  data:function(){
    return {
      classes:[]
    }
  },
  created:function(){
    if(this.tag){
      this.classes.push(this.tag);
    }
    if(this.show){
      Array.prototype.push.apply(this.classes,[this.placement,'fade','in']);
    }
  },
  computed:{
    bPlacement:{
      get:function(){
        return this.placement;
      },
      set:function(placement){
        this.placement = placement
      }
    }
  },
  methods:{
    fadeIn:function(){
      this.classes.push('fade');
    },
    animateIn:function(){
      this.classes.push(this.placement);
      this.classes.push('in');
    }
  }
}