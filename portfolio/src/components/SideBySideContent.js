function SideBySideContent(props) {
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{flex: "1 1 500px"}}>
                {props.left}
            </div>
            <div style={{flex: "1 1 500px"}}>
                {props.right}
            </div>
        </div>
    )
}

export default SideBySideContent;