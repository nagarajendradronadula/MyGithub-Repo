export default function Button() {

    function hello(event){
        console.log("Hello!");
        console.log(event);
    }

    function bye() {
        console.log("Bye!");
    }

    function dblClick() {
        console.log("Double Clicked");
    }

    return (
        <div>
            <button onClick={hello}>Click me!</button>
            <p onMouseOver={bye}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit neque, soluta pariatur ut accusantium inventore fuga cumque ducimus quas vero, illum delectus ea ipsam, sint in aliquam aspernatur excepturi.
            Magnam, cumque maxime est obcaecati alias qui ex quia possimus rem dolorem consequuntur totam consequatur voluptatem quod laborum commodi minus, a, facere quis nisi id. Cum temporibus omnis neque accusantium!
            Culpa nulla necessitatibus consectetur iste itaque debitis tempore quidem expedita, assumenda, nobis doloremque dicta eveniet consequatur asperiores beatae voluptatem adipisci dolorem repudiandae cum! Porro maxime nemo rem nihil, nisi tempore.</p>
            <button onDoubleClick={dblClick}>Double Click me!</button>
        </div>
    )
}