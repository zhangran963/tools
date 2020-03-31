const prompts = require('prompts');

(async () => {
	const response = await prompts([
		// {
		// 	type: 'confirm',
		// 	name: 'trueOrFalse',
		// 	message: '对或错:'
		// 	// validate: value => value < 18 ? `Nightclub is 18+ only` : true
		// },
		// {
		//   type: 'invisible',
		//   name: 'val',
		//   message: '不可见内容'
		// },
		// {
		// 	type: 'list',
		// 	name: 'value',
		// 	message: 'list',
		// 	choices: [{ title: 'page1' }]
    // }
    // {
    //   type: 'multiselect',
    //   name: 'color',
    //   message: '多选颜色, 空格选中某项, 回车完成',
    //   choices: [{
    //     title: '红色', value: '#ff0000'
    //   },{
    //     title: '绿色', value: '#00ff00'
    //   }, {
    //     title: '蓝色', value: '#0000ff'
    //   }]
    // },
    // {
    //   type: 'list',
    //   name: 'list',
    //   message: '等待输入, 用空格隔开',
    //   seperator: ','
    // },
    // {
    //   type: 'toggle',
    //   name: 'value',
    //   message: 'toggle类型?',
    //   initial: true,
    //   active: '是',
    //   inactive: '否'
    // },
    // {
    //   type: 'select',
    //   name: 'value',
    //   message: 'Pick a color',
    //   choices: [
    //     { title: 'Red', description: 'This option has a description', value: '#ff0000' },
    //     { title: 'Green', value: '#00ff00', disabled: true },
    //     { title: 'Blue', value: '#0000ff' }
    //   ],
    //   initial: 1
    // },
    // {
    //   type: 'autocomplete',
    //   name: 'value',
    //   message: 'Pick your favorite actor',
    //   choices: [
    //     { title: 'Cage' },
    //     { title: 'Clooney', value: 'silver-fox' },
    //     { title: 'Gyllenhaal' },
    //     { title: 'Gibson' },
    //     { title: 'Grant' }
    //   ],
    //   suggest: (input, choices) => {
    //     /* 过滤规则: 包含, 非首相同 */
    //     return Promise.resolve(choices.filter(i => i.title.includes(input)))
    //   },
    //   onRender(kleur){
    //     /* this.msg === message属性 */
    //     this.msg = kleur.cyan('输入数字: ')
    //   },
    //   // onState(){
    //   //   return {value: 'this is', aborted: true}
    //   // }
    // },
    {
      type: 'autocompleteMultiselect',
      name: 'value',
      message: 'Pick your favorite actor',
      choices: [
        { title: 'Cage', description: '描述内容' },
        { title: 'Clooney', value: 'silver-fox', description: '描述内容' },
        { title: 'Gyllenhaal' },
        { title: 'Gibson' },
        { title: 'Grant' }
      ],
      suggest: (input, choices) => {
        /* 过滤规则: 包含, 非首相同 */
        return Promise.resolve(choices.filter(i => i.title.includes(input)))
      },
      onRender(kleur){
        /* this.msg === message属性 */
        this.msg = kleur.cyan('输入数字: ')
      },
      // onState(){
      //   return {value: 'this is', aborted: true}
      // }
    }
	]);

	console.log('结果: ', response); 
})();
