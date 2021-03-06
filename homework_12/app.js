const model = {
    currentPerson: {},
    allPersons: [
        {
            name: 'Lily Butler',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
        }, {
            name: 'Waller Perry',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
        }, {
            name: 'Tammi Donovan',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
        }, {
            name: 'Doreen Flowers',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
        }, {
            name: 'Price Pace',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
        }, {
            name: 'Larson Maldonado',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
        }, {
            name: 'Berg Bolton',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
        }, {
            name: 'Mack Lott',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
        }, {
            name: 'Rosanna Mcleod',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
        }, {
            name: 'Rosalie Rice',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
        }, {
            name: 'Virginia Buchanan',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
        }, {
            name: 'Lorna Stein',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
        }, {
            name: 'Rosalie Steele',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
        }, {
            name: 'Wilcox Boyd',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
        }, {
            name: 'Ollie Rice',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
        }
    ]
};

const control = {
    init: function () {
        sortView.init();
        sortView.render();

        listView.init();
        listView.render();

        scoresView.init();
        scoresView.render();

        profileView.init();
    },

    getAllNames: function () {
        return model.allPersons.map(el => el.name);
    },

    getAllScores: function () {
        return model.allPersons.map(el => el.score);
    },

    setCurrentPerson: function (index) {
        model.currentPerson = model.allPersons[index];
        this.viewCurrentProfile();
    },

    getCurrentPerson: function () {
        return model.currentPerson;
    },

    viewCurrentProfile: function () {
        profileView.render();
    },

    setCurrentPersonScore: function (value) {
        model.currentPerson.score = parseInt(value);
        profileView.render();
        scoresView.render();
    },

    sortList: function (list, direction) {

        if (direction === 'arrow-down') {
            model.allPersons.sort(function (i, j) {
                if (i[list] > j[list]) {
                    return 1;
                } else if (i[list] < j[list]) {
                    return -1;
                } else {
                    return 0;
                }
            });

        } else if (direction === 'arrow-up') {
            model.allPersons.sort(function (i, j) {
                if (i[list] < j[list]) {
                    return 1;
                } else if (i[list] > j[list]) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }

        listView.render();
        scoresView.render();
    }
};

const listView = {
    init: function () {
        this.$container = $('.names');
        this.handleClicks();
    },

    render: function () {
        let template = control.getAllNames().reduce((acc, cur, i) => {
            return acc += `<li>${cur}</li>`;
        }, '');
        this.$container.html(template);
    },

    handleClicks: function () {
        this.$container.on('click', 'li', function (e) {
            let currentIndex = $(e.target).index();
            control.setCurrentPerson(currentIndex);
        });
    }
};

const scoresView = {
    init: function () {
        this.$container = $('.scores');
        this.handleClicks();
    },

    render: function () {
        let template = control.getAllScores().reduce((acc, cur) => {
            return acc += `
                <li>
                    <span>${cur}</span>
                    <input class="hidden score-input" type="text" value="${cur}">
                </li>
            `
        }, '');
        this.$container.html(template);
    },

    handleClicks: function () {
        this.$container.on('click', 'li', function (e) {
            let $currentLi = $(e.target);
            let $currentSpan = $currentLi.find('span');
            let $currentInput = $currentLi.find('input.score-input');
            let currentIndex = $currentLi.index();
            if (!$currentInput.is('.hidden')) {
                return false;
            }
            control.setCurrentPerson(currentIndex);
            $currentSpan.addClass('hidden');
            $currentInput.removeClass('hidden').focus();
        });

        this.$container.on('focusout .score-input', function (e) {
            let newScore = $(e.target).val();
            control.setCurrentPersonScore(newScore);
        });
    }
};

const profileView = {
    init: function () {
        this.$container = $('.profile');
    },

    render: function () {
        let currentPerson = control.getCurrentPerson();
        let template = `
            <img src="${currentPerson.photoUrl}">
            <h3>${currentPerson.name}</h3>
            <p>Score:${currentPerson.score}</p>
        `
        this.$container.html(template);
    }
};

const sortView = {
    init: function () {
        this.$container = $('.sort-controls');
        this.handleClicks();
    },

    render: function () {
        let template = `
            <li class="name">
                <span>Names</span>
                <div class="arrows">
                    <span class="arrow-up"></span>
                    <span class="arrow-down"></span>
                </div>
            </li>
            <li class="score">
                <span>Scores</span>
                <div class="arrows">
                    <span class="arrow-up"></span>
                    <span class="arrow-down"></span>
                </div>
            </li>
        `;

        this.$container.html(template);
    },

    handleClicks: function () {
        this.$container.on('click', '.arrows', function (e) {
            let list = e.target.parentNode.parentNode.className;
            let direction = e.target.className;

            $('.arrow-up').removeClass('blue-up');
            $('.arrow-down').removeClass('blue-down');

            if (direction === 'arrow-up') {

                $(e.target).addClass('blue-up');
            } else if (direction === 'arrow-down') {
                $(e.target).addClass('blue-down');
            }
            console.log(list, direction)
            control.sortList(list, direction);
        });
    }
}

control.init();