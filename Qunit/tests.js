QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("Testing Plus function", function(assert) {
  assert.equal(5, plus(2, 3), "3 + 2 is 5");
});

QUnit.test("Testing Plus function with failing", function(assert) {
  assert.equal(4, plus(2, 2), "2 + 2 is 5");
});
<<<<<<< HEAD


QUnit.test("Logs function integer",function(assert){
	assert.equal(2,logs(100),"log(100) is 2");
});


QUnit.test("Logs function decimal",function(assert){
	assert.equal(-2,logs(0.01),"log(0.01) is -2");
});
=======
QUnit.test("Testing Sqrt function with failing", function (assert) {
    assert.equal(10, getsquareroot(100), "sqrt(100) is 10");
});


