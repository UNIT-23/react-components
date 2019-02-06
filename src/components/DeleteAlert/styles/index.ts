import { createStyles, Theme } from "@material-ui/core"

export const styles = (theme: Theme) =>
	createStyles({
  root: {
		padding: 0,
	 marginLeft: "60px",
	 marginRight: "20px"
  },
  container: {
		marginRight: "-1050px",
	 marginTop: "-320px"
  },
  paper: {
	width: "556px",
	height: "172px",
	background: "red"
  },
  title: {
	font: "normal bold 16px/normal Rubik",
	color: theme.palette.primary.main,
	paddingTop: "10px"
  },
  text: {
	font: "normal 300 16px/normal Rubik",
	color: theme.palette.primary.main,
	paddingTop: "10px"
  },
  trash: {
	marginBottom: "-35px",
	marginLeft: "30px",
	paddingTop: "10px"
  }
})
