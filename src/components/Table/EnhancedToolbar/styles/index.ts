import { createStyles } from "@material-ui/core"
import { StyleRules } from "@material-ui/core/styles/withStyles"
import { Theme, Fonts } from "../../../../theme"

import { MuiTheme } from "../../../../theme/"

export default (theme: typeof MuiTheme): StyleRules =>
    createStyles({
        root: {
            backgroundColor: Theme.primaryLight
        },
        searchBarSpacer: {
            flex: "0 1 5%"
        },
        searchBar: {
            color: theme.palette.text.secondary,
            maxWidth: 281,
            "& input": {
                maxHeight: 41,
                marginTop: 0,
                backgroundColor: Theme.gray,
                "&::-webkit-input-placeholder": {
                    color: "#D3D7E1"
                }
            }
        },
        actionButtonSpacer: {
            flex: "1 1 0%"
        },
        title: {
            flex: "0 0 auto",
            fontWeight: 500,
            color: Theme.secondary,
            textTransform: "uppercase",
            fontSize: Fonts.size.h5
        }
    })
