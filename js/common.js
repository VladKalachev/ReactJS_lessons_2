
var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];



/*const Battom = React.createClass({
    render(){
        return (
            <div>
                <div>Bottom</div>
            </div>
        )
    }
});*/

/*Вывод списка с помошью свойт через компанент*/
var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate = data.map(function(item, index) {
            return (
                <div key={index}>
                    <p className="news__author">{item.author}:</p>
                    <p className="news__text">{item.text}</p>
                </div>
                )
        })
        return (
            <div className="news">
                {newsTemplate}
            </div>
            );
    }
});


const App = React.createClass({
    render(){
        return (
            <div>
                <h1 >Vlad</h1>
                <p className="text1">List</p>
               {/* <Battom />*/}
                <News data={my_news} />
               {/* <h1>My name is: {this.props.data}</h1>*/}
            </div>
        )
    }
});

const element = <h1>Hello, world!</h1>;
const value1 = "Hello Wold";

      ReactDOM.render(
        <App />,
        document.getElementById('container')
      );

