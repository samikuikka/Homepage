import theme from "../theme";



const container = {
    backgroundColor: theme.colors.primary,
    padding: "1em",
}

const links = {
    display: "flex",
    flexFlow: "row wrap"
}

const leftHeader = {
    display: "flex",
    justifyContent: "flex-start",
}

const rightHeader = {
    display: "flex",
    justifyContent: "flex-end",
}

const link =  {
    color: theme.colors.text_primary,
    paddingRight: "3em",
}

const style = {
    container,
    links,
    link,
    leftHeader,
    rightHeader
}
export default style;