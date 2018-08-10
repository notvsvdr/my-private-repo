function Company(value) {

    var _name = value.name;
    var _owner = value.owner;
    var _maxCount = value.maxCompanySize;
    var _employees = [];
    var timeOfCreation = new Date();
    var _logs = `${_name} was created in ${timeOfCreation}.\n`;

    this.addNewEmployee = function(obj) {
        if(obj instanceof Employee) {
            if(_employees.length === _maxCount) {
                this.removeEmployee(findLowestSalary());
            }

            obj.hired = new Date();
            obj.hire(_name);
            _employees.push(obj);
            _logs += `${obj.getName()} started working in ${_name} at ${obj.hired}.\n`;
        } else {
            console.log('Please try to add Employee instance');
        }
    }

    this.removeEmployee = function(index) {
        if (index < _employees.length) {
            _employees[index].fire(_name);
            _logs += `${_employees[index].getName()} ends working at ${_name} in ${new Date()}`;
            _employees.splice(index, 1);
        }
    }

    this.getAverageSalary = function() {
        return _employees.reduce(function(sum, curr) {
            return sum + curr.getSalary();
        }, 0) / _employees.length;
    }

    this.getAverageAge = function() {
        return _employees.reduce(function(sum, curr) {
            return sum + curr.getAge();
        }, 0) / _employees.length;
    }

    this.getEmployees = function() {
        let diffEmployees = [];

        for(let i = 0; i < _employees.length; i++) {
            let temp = {};
            temp.name = _employees[i].getName();
            temp.age  = _employees[i].getAge();
            temp.primarySkill = _employees[i].getPrimarySkill();
            temp.salary = _employees[i].getSalary();
            diffEmployees.push(temp);
        }

        return diffEmployees;
    }

    this.getFormattedListOfEmployees = function() {
        let formattedList = _employees.map(function(el) {
            return `${el.getName()} - works in ${_name} ${(Date.now() - el.hired.getTime()) / 1000} seconds\n`;

        });
        return formattedList.join('\n');
    }

    this.getHistory = function() {
        return _logs;
    }

    function findLowestSalary() {
        let lowestSalary = _employees[0].getSalary();
        let lowestSalaryIndex = 0;
        for (let i = 1; i < _employees.length; i++) {
            if (_employees[i].getSalary() < lowestSalary) {
                lowestSalary = _employees[i].getSalary();
                lowestSalaryIndex = i;
            }
        }
        return lowestSalaryIndex;
    }
}

function Employee(value) {
    var _name = value.name;
    var _primarySkill = value.primarySkill;
    var _age = value.age;
    var _salary = value.salary;
    var _companyName = '';
    var _workTime = 0;
    var _logs = '';
    this.hired = 0;

    this.getName = function() {
        return _name;
    }

    this.getAge = function() {
        return _age;
    }

    this.getPrimarySkill = function() {
        return _primarySkill;
    }

    this.getSalary = function() {
        return _salary;
    }

    this.setSalary = function(value) {
        if(value < _salary) {
            _logs += `try change salary from ${_salary} to ${value}.\n`;
            return;
        }
        _logs += `change salary from ${_salary} to ${value}.\n`;
        _salary = value;
    }

    this.getWorkTimeInSeconds = function() {
        let temp = 0;
        if(_companyName !== '') {
            temp += Date.now() - this.hired;
        }

        temp += _workTime;

        return temp / 1000;
    }
    
    this.fire = function() {
        this._workTime += Date.now() - this.hired;
        _logs += `${_name} was fired from ${_companyName} in ${this.hired}.\n`;
        _companyName = '';
    }

    this.hire = function(value) {
        _companyName = value;
        _logs += `${_name} was hired to ${_companyName} in ${this.hired}.\n`;
    }

    this.getHistory = function() {
        return _logs;
    }
}
let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

epam.removeEmployee(2);


console.log(vasyl.getHistory());
console.log(epam.getAverageSalary());
console.log(epam.getAverageAge());

epam.addNewEmployee(5,6,9,5);

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds());
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());