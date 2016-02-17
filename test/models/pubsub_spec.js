describe("pubsub", function(){

  it("should subscribe functions and then execute them", function(){
    var stub = sinon.stub();
    pubsub.subscribe('myEvent', stub);
    pubsub.publish('myEvent');
    expect(stub.calledWith()).toEqual(true);
  });

  it("can subscribe multiple functions", function(){
    var stubOne = sinon.stub();
    var stubTwo = sinon.stub();
    pubsub.subscribe('myEvent', stubOne);
    pubsub.subscribe('myEvent', stubTwo);
    pubsub.publish('myEvent');
    expect(stubOne.calledWith()).toEqual(true);
    expect(stubTwo.calledWith()).toEqual(true);
  });

  it("won't call functions when not called", function(){
    var stubOne = sinon.stub();
    var stubTwo = sinon.stub();
    pubsub.subscribe('firstEvent', stubOne);
    pubsub.subscribe('secondEvent', stubTwo);
    pubsub.publish('firstEvent');
    expect(stubOne.calledWith()).toEqual(true);
    expect(stubTwo.calledWith()).toEqual(false);
  });

  

});