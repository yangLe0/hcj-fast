/*
var person = {
  name: "Ben",
  age: 30,
  eat: function(){
    alert("胃口好")
  }
}
alert(person.name);
*/
/*
function Person(){
	
}
Person.prototype = {
	name: "May",
	age: 30,
	eat: function(){
		alert("吃饭中")
	}
}
*/
/*
(function(){
	var n = "Sue";
	function People(name){//当做“类”来使用
		this._name = name;
	}
	People.prototype.say = function(){
		alert("peo-hello" + this._name + n);
	}
	window.People = People;
}());

(function(){
	function Student(name){
		this._name = name;
	}
	Student.prototype = new People();//Student继承People
	var superSsay = Student.prototype.say;
	Student.prototype.say = function(){//复写方法
		superSsay.call(this);
		alert("stu-hello"+ this._name);
	}
	window.Student = Student;
}())

var s = new Student("April");
s.say()
*/

(function(){//封装
	var n = "in";
	function Person(name){
		var _this = {}
		_this.name = name;
		_this.sayHello = function(){
			alert("PersonHello" + _this.name + n);
		}
		return _this;
	}
	window.Person = Person;
}());


function Teacher(name){
	var _this = Person(name);
	var superSay = _this.sayHello;
	_this.sayHello = function(){
		superSay.call(_this);
		alert("Teacherhello" + _this.name);
	}
	return _this;
}

var t = Teacher("Ann");
t.sayHello();