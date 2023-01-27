const mikeWorkBackpack = {
  volume: 27,
  smallPockets: 3,
  largePockets: 4,
  sideNetting: 2,

  smallCompartmentOpen: false,
  bigCompartmentOpen: false,
  openBigCompartment:function(lidStatus){
    this.bigCompartmentOpen = lidStatus
  },
  openSmallCompartment:function(lidStatus){
    this.smallComparmentOpen = lidStatus
  },


 
};




const varDragon ={
variablePractice: 33,
setNewVariable:function(updateVar){
  this.variablePractice = updateVar
}
};

console.log("Backpack Object", mikeWorkBackpack);
console.log("property selection: how many sidenets are there --> ", mikeWorkBackpack.sideNetting);