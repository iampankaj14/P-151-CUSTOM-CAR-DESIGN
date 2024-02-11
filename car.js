AFRAME.registerComponent("car",{
    schema:{
        moveBox:{type:"number",defalut:0.01}},
    tick:function(){
        this.data.moveBox= this.data.moveBox+0.01
        var p = this.el.getAttribute("position")
        p.x = this.data.moveBox
        this.el.setAttribute("position",{x:p.x,y:p.y,z:p.z})
    }
})