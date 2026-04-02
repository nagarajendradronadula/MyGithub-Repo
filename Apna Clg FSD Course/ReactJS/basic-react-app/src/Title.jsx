import MsgBox from "./MsgBox.jsx";

export default function Title(){
    return (
      <div>
        <MsgBox userName="John" textColor="red"/>
        <MsgBox userName="Jane" textColor="blue"/>
        <MsgBox userName="Joe" textColor="green"/>
      </div>
    );
  }