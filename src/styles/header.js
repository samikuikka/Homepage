import theme from "../theme";



const container = {
    backgroundColor: theme.colors.primary,
    padding: "1em",
    paddingLeft: "3em",
    paddingRight: "3em"
}

const links = {
    display: "flex",
    justifyContent: "space-evenly"
}

const link =  {
    color: theme.colors.text_primary
}

const style = {
    container,
    links,
    link
}
export default style;