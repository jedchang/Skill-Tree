(function () {
  let skillsData = [
    {
      category: 'Basics',
      stepIcon: './images/basics.png',
      active: true,
      skill: [
        {
          icon: 'category',
          title: {
            firstWord: 'BASIC',
            secondWord: 'SKILLS',
          },
          selected: true,
          allDone: false,
          recommended: [
            {
              recName: 'Learn HTML',
              clicked: false,
            },
            {
              recName: 'Basics of CSS',
              clicked: false,
            },
            {
              recName: 'Basics of JavaScript',
              clicked: false,
            },
          ],
          optional: [],
        },
        {
          icon: 'build',
          title: {
            firstWord: 'BASIC',
            secondWord: 'TOOLS',
          },
          selected: false,
          allDone: false,
          recommended: [
            {
              recName: 'Git - Version Control',
              clicked: false,
            },
            {
              recName: 'Basic Terminal Usage',
              clicked: false,
            },
            {
              recName: 'Text Editor',
              clicked: false,
            },
            {
              recName: 'A Heart of Researching',
              clicked: false,
            },
          ],
          optional: [],
        },
      ],
    },
    {
      category: 'CSS',
      stepIcon: './images/css.png',
      active: false,
      skill: [
        {
          icon: 'flip_to_front',
          title: {
            firstWord: 'CSS',
            secondWord: 'FRAMEWORK',
          },
          selected: false,
          allDone: false,
          recommended: [
            {
              recName: 'Bootstrap',
              clicked: false,
            },
          ],
          optional: [
            {
              optName: 'UIKit',
              clicked: false,
            },
            {
              optName: 'Foundation',
              clicked: false,
            },
            {
              optName: 'Semantic UI',
              clicked: false,
            },
          ],
        },
        {
          icon: 'view_quilt',
          title: {
            firstWord: 'CSS',
            secondWord: 'PREPROCESSORS',
          },
          selected: false,
          allDone: false,
          recommended: [
            {
              recName: 'Sass',
              clicked: false,
            },
            {
              recName: 'PostCSS',
              clicked: false,
            },
          ],
          optional: [
            {
              optName: 'Less',
              clicked: false,
            },
            {
              optName: 'Stylus',
              clicked: false,
            },
          ],
        },
        {
          icon: 'developer_board',
          title: {
            firstWord: 'CSS',
            secondWord: 'ARCHITECTURE',
          },
          selected: false,
          allDone: false,
          recommended: [
            {
              recName: 'OOCSS',
              clicked: false,
            },
          ],
          optional: [
            {
              optName: 'SMACSS',
              clicked: false,
            },
            {
              optName: 'BEM',
              clicked: false,
            },
          ],
        },
        {
          icon: 'devices',
          title: {
            firstWord: 'CSS',
            secondWord: 'SKILLS',
          },
          selected: false,
          allDone: false,
          recommended: [
            {
              recName: 'Responsive Web',
              clicked: false,
            },
            {
              recName: 'Flexbox',
              clicked: false,
            },
          ],
          optional: [],
        },
        {
          icon: 'widgets',
          title: {
            firstWord: 'CSS',
            secondWord: 'MASTERY',
          },
          selected: false,
          allDone: false,
          recommended: [],
          optional: [
            {
              optName: 'Grid Layout',
              clicked: false,
            },
            {
              optName: 'Animation',
              clicked: false,
            },
            {
              optName: 'Transform 2D, 3D',
              clicked: false,
            },
          ],
        },
      ],
    },
    {
      category: 'JavaScript',
      stepIcon: './images/js.png',
      active: false,
      skill: [
        {
          icon: 'hdr_strong',
          title: {
            firstWord: 'BASIC',
            secondWord: 'DOM',
          },
          selected: false,
          allDone: false,
          recommended: [],
          optional: [
            {
              optName: 'jQuery',
              clicked: false,
            },
          ],
        },
        {
          icon: 'gradient',
          title: {
            firstWord: 'WEB',
            secondWord: 'DRAWING',
          },
          selected: false,
          allDone: false,
          recommended: [],
          optional: [
            {
              optName: 'SVG',
              clicked: false,
            },
            {
              optName: 'Canvas',
              clicked: false,
            },
            {
              optName: 'D3.js',
              clicked: false,
            },
          ],
        },
        {
          icon: 'format_quote',
          title: {
            firstWord: 'JAVASCRIPT',
            secondWord: 'SKILLS',
          },
          selected: false,
          allDone: false,
          recommended: [
            {
              recName: 'ES6',
              clicked: false,
            },
          ],
          optional: [],
        },
        {
          icon: 'developer_mode',
          title: {
            firstWord: 'JAVASCRIPT',
            secondWord: 'FRAMEWORK',
          },
          selected: false,
          allDone: false,
          recommended: [
            {
              recName: 'Vue.js',
              clicked: false,
            },
            {
              recName: 'Angular',
              clicked: false,
            },
            {
              recName: 'React.js',
              clicked: false,
            },
          ],
          optional: [],
        },
        {
          icon: 'nfc',
          title: {
            firstWord: 'JAVASCRIPT',
            secondWord: 'PREPROCESSORS',
          },
          selected: false,
          allDone: false,
          recommended: [],
          optional: [
            {
              optName: 'TypeScript',
              clicked: false,
            },
            {
              optName: 'Babel',
              clicked: false,
            },
            {
              optName: 'CoffeeScript',
              clicked: false,
            },
          ],
        },
      ],
    },
    {
      category: 'Managers',
      stepIcon: './images/managers.png',
      active: false,
      skill: [
        {
          icon: 'device_hub',
          title: {
            firstWord: 'PACKAGE',
            secondWord: 'MANAGERS',
          },
          selected: false,
          allDone: false,
          recommended: [
            {
              recName: 'NPM',
              clicked: false,
            },
            {
              recName: 'YARN',
              clicked: false,
            },
          ],
          optional: [
            {
              optName: 'Bower',
              clicked: false,
            },
          ],
        },
        {
          icon: 'import_contacts',
          title: {
            firstWord: 'TASK',
            secondWord: 'RUNNERS',
          },
          selected: false,
          allDone: false,
          recommended: [
            {
              recName: 'npm scripts',
              clicked: false,
            },
            {
              recName: 'gulp',
              clicked: false,
            },
          ],
          optional: [
            {
              optName: 'grunt',
              clicked: false,
            },
          ],
        },
        {
          icon: 'table_chart',
          title: {
            firstWord: 'BUILD',
            secondWord: 'TOOLS',
          },
          selected: false,
          allDone: false,
          recommended: [
            {
              recName: 'Webpack',
              clicked: false,
            },
          ],
          optional: [
            {
              optName: 'Parcel',
              clicked: false,
            },
          ],
        },
      ],
    },
  ];

  new Vue({
    el: '#app',
    data: {
      skills: skillsData,
      rank: [
        {
          firstTitle: 'FRONT-END',
          lastTitle: 'NOOB',
        },
        {
          firstTitle: 'FRONT-END',
          lastTitle: 'BEGINNER',
        },
        {
          firstTitle: 'FRONT-END',
          lastTitle: 'DEVELOPER',
        },
        {
          firstTitle: 'FRONT-END',
          lastTitle: 'MASTER',
        },
      ],

      nowSelected: 'BASIC SKILLS',
      nowLevel: 0,
      nowDone: 0,
    },
    mounted() {
      this.arrowHandler(0);
    },
    methods: {
      changeSkill(skill) {
        this.skills.forEach((item) => {
          item.skill.forEach((innerItem) => {
            innerItem.selected = false;
          });
        });
        skill.selected = !skill.selected;
        let name = skill.title.firstWord + ' ' + skill.title.secondWord;
        this.nowSelected = name;
      },
      selectedSkill(item) {
        item.clicked = true;
        console.log('item', item);
        let recClicked = this.filterSkill.recommended.filter((item) => {
          return item.clicked === true;
        });
        let optClicked = this.filterSkill.optional.filter((item) => {
          return item.clicked === true;
        });

        if (
          recClicked.length === this.filterSkill.recommended.length &&
          optClicked.length === this.filterSkill.optional.length
        ) {
          this.filterSkill.allDone = true;
        } else {
          this.filterSkill.allDone = false;
        }

        let temp = [];
        let nowSkill = this.filterSkill;
        console.log('nowSkill:', nowSkill);

        if (this.filterSkill.allDone) {
          temp.push(nowSkill);
          this.nowDone += temp.length;
        }
        switch (this.nowDone) {
          case 2:
            this.skills[1].active = true;
            this.nowLevel = 1;
            this.arrowHandler(1);
            console.log('case 2');
            break;
          case 7:
            this.skills[2].active = true;
            this.nowLevel = 2;
            this.arrowHandler(2);
            console.log('case 7');
            break;
          case 12:
            this.skills[3].active = true;
            this.nowLevel = 3;
            console.log('case 12');
            break;
          case 15:
            document.querySelector('body').classList.add('completed');
            break;
        }
      },
      arrowHandler(id) {
        document.querySelector('#arrow-' + id).style.display = 'block';
      },

      doneRecommended(skill) {
        let recCount = skill.recommended.filter((item) => {
          return item.clicked === true;
        });
        return recCount.length;
      },

      doneOptional(skill) {
        let optCount = skill.optional.filter((item) => {
          return item.clicked === true;
        });
        return optCount.length;
      },
    },
    computed: {
      filterSkill() {
        let nowSkill;
        this.skills.forEach((item) => {

          if (!nowSkill) {
            nowSkill = item.skill.find((innerItem) => {
              let name = innerItem.title.firstWord + ' ' + innerItem.title.secondWord; // 組 title 文字：BASIC SKILLS
              return name === this.nowSelected;
            });
          }
        });
        return nowSkill;
      },
    },
  });
})(Vue);
