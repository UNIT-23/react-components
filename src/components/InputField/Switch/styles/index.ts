import { Styles } from "react-jss"
import { Theme } from "../../../../theme"

export const styles: Styles = {
    container: {
        height: "31px"
    },
    checked: {
        color: Theme.primary,
        "& + $bar": {
            opacity: 1,
            background: Theme.secondary
        }
    },
    bar: {
        background: "#F2F4F6",
        borderRadius: "12px",
        width: "40px",
        height: "22px",
        opacity: 1
    },
    icon: {
        color: "#98A9BC",
        width: "16px",
        height: "16px",
        margin: "11px 0px 3px 4px"
    },
    iconChecked: {
        color: Theme.primary
    }
}
