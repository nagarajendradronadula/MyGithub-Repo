export default function Price({oldPrice, newPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
    }
    let newStyles = {
        fontWeight: "bold",
        fontSize: "1.25rem",
    }
    let styles = {
        backgroundColor: "#FFD700",
        width: "230px",
        height: "30px",
        padding: 0,
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    }    
    return (
        <div style={styles}>
            <span style= {oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}