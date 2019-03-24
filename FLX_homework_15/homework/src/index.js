function Employee (argEmployee) {
    this.name = argEmployee.name;
    this.age = argEmployee.age;
    this.salary = argEmployee.salary;
    this.primarySkill = argEmployee.primarySkill;
    let _company;
    let _hireTime;
    let _fireTime;
    let thousand = 1000;
    let _logs = [];

    function getDate () {
        return new Date();
    }

    this.getSalary = function () {
        return this.salary;
    }

    this.setSalary = function (newSalary) {
        if (isNaN(newSalary) && newSalary > this.salary) {
            _logs.push(`change salary from ${this.salary} to ${newSalary}`);
            this.salary = newSalary;
        } else {
            _logs.push(`try to change salary from ${this.salary} to ${newSalary}`);
        }
    }

    this.getWorkTimeInSeconds = function () {
        if (_company) {
            return (getDate() - _hireTime) / thousand;
        } else {
            return (_fireTime - _hireTime) / thousand;
        }
    }

    this.hire = function (companyName) {
        if (this.argCompany) {
            console.log('Employee has already been hired.')
        } else {
            _hireTime = getDate();
            _company = companyName;
            _logs.push(`${this.name} is hired to ${_company} in ${_hireTime}`);
        }
    }

    this.fire = function () {
        _fireTime = getDate();
        _logs.push(`${this.name} is fired from ${this.companyName} in ${_fireTime}`);
        delete this.companyName;
    }

    this.getHistory = function () {
        return _logs;
    }
}

function Company (argCompany) {
    this.companyName = argCompany.name;
    this.owner = argCompany.owner;
    this.maxCompanySize = argCompany.maxCompanySize;
    let _employees = [];
    let _logs = [];
    let one = 1;
    let zero = 0;
    _logs.push(`${this.companyName} was created in ${getDate()}`);

    function getDate() {
		return new Date();
	}

    this.addNewEmployee = function (employee) {
        if ( employee instanceof Employee ) {
            if (_employees.length < this.maxCompanySize) {
                employee.hire(this.companyName);
                _employees.push(employee);
                _logs.push(`${employee.name} starts working at ${this.companyName} in ${getDate()}`);
            } else if (_employees.length >= this.maxCompanySize) {
                let _lowestSalary = _employees[zero].salary;
                let _lowestSalaryEmployeeIndex = 0;
                for (let i = 0; i < _employees.length; i++) {
                    if (_lowestSalary > _employees[i].salary) {
                        _lowestSalary = _employees[i].salary;
                        _lowestSalaryEmployeeIndex = i;
                    }
                }
                this.removeEmployee(_lowestSalaryEmployeeIndex);
                this.addNewEmployee(employee);
            }
        } else {
            console.log('Please try to add Employee instance ');
        }
    }

    this.removeEmployee = function (index) {
        if( !isNaN(index) ) {
            _logs.push(`${_employees[index].name} ends working at ${this.companyName} in ${getDate()}`);
            _employees[index].fire();
            _employees.splice(index, one);
        } else {
            console.log('You can remove employee only using index');
        }
    }

    this.getAvarageSalary = function () {
        let _totalSalary = 0;
        let _hundred = 100;
        for (let i = 0; i < _employees.length; i++) {
            _totalSalary += _employees[i].salary;
        }
        let _average = _totalSalary / _employees.length;
        return Math.round(_average * _hundred) / _hundred;
    }

    this.getEmployees = function () {
        let _names = [];
        for (let i = 0; i < _employees.length; i++) {
            _names.push(_employees[i].name);
        }
        return _names;
    }

    this.getFormattedListOfEmployees = function () {
        let _formattedList = [];
        for (let i = 0; i < _employees.length; i++) {
            _formattedList.push(`
            ${_employees[i].name} -  works in ${this.companyName} ${_employees[i].getWorkTimeInSeconds()} seconds`);
        }
        return _formattedList;
    }

    this.getAvarageAge = function () {
        let _totalAge = 0;
        for (let i = 0; i < _employees.length; i++) {
            _totalAge += _employees[i].age;
        }
        let _average = _totalAge / _employees.length;
        return _average;
    }

    this.getHistory = function () {
        return _logs;
    }
}



// let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
// let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
// let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
// let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
// let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
// let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

// let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});

// epam.addNewEmployee(artem);
// epam.addNewEmployee(vova);
// epam.addNewEmployee(vasyl);
// epam.addNewEmployee(ivan);
// epam.addNewEmployee(orest);
// epam.addNewEmployee(anton);
// console.log(epam.getHistory());
// epam.removeEmployee(2);

// console.log(vasyl.getHistory());

// console.log(epam.getAvarageSalary()); 
// console.log(epam.getAvarageAge());  

// epam.addNewEmployee(5,6,9,5); 

// setTimeout(() => {
//    epam.removeEmployee(1);
//    console.log(artem.getWorkTimeInSeconds()); 
// }, 5000);

// vova.setSalary(900);
// vova.setSalary(2200);
// console.log(vova.getHistory());
