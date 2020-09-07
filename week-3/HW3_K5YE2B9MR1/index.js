let data = [
    { id: 1, text: "Hulk", classItem: ""},
    { id: 2, text: "Marvel", classItem: "logo is-active"},
    { id: 3, text: "Venom", classItem: ""},
];

function NavItem(props) {
    return (
        <a href="#" className={props.classItem}>
            {props.text}
        </a>
    );
}

let wallData = [
    { id: 1, img: "./img/venom-1.jpg" },
    { id: 2, img: "./img/hulk-1.jpg" },
    { id: 3, img: "./img/venom-2.jpg" }, 
];

function Wallpaper(props) {
    return (
        <article className="wallpaper">
            <img src={props.img} alt="wallpaper #1" className="wallpaper" />
        </article>
    );
}

function SearchForm(){
    const [value, setValue] = React.useState('');

    function onChange(e){
        setValue(e.target.value);
    }

    return (
        <form>
            <input type="search" placeholder="Search" value={value} onChange={onChange}/>
        </form>
    );
}

const wallList = wallData.map(item => <Wallpaper key={item.id} img={item.img} />);

const navList = data.map(item => <NavItem key={item.id} text={item.text} classItem={item.classItem} />
);

ReactDOM.render (
  <React.Fragment>{navList}</React.Fragment>,
  document.getElementById("root"));  

ReactDOM.render( <SearchForm />,
    document.getElementById("contain_search")
);

ReactDOM.render(
    <React.Fragment>{wallList}</React.Fragment>,
    document.getElementById("wallpaper")
);
