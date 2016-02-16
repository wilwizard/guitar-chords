describe("pubsub", function(){



  it("should subscribe functions and then execute them", function(){
    console.log(sinon);
    var stub = sinon.stub();
    pubsub.subscribe('myEvent', stub);
    pubsub.publish('myEvent');
    expect(stub.hasBeenCalled()).toEqual(true);
  });
});