function MyFancyWidget(props){
    return (
        <ul>
            <li>Widget Size: {props.widgetSize}</li>
            <li>Number Of Columns: {props.numberOfColumns}</li>
            <li>Title: {props.title}</li>
        </ul>
    )
}
export default MyFancyWidget;