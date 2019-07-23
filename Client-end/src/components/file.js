import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SimpleAppBar from './layouts/appBar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
	},
}));

export default function Sheetfile() {
	const classes = useStyles();

	return (
		<div>
			<SimpleAppBar />

			<Paper className={classes.root}>
				<Typography variant="h5" component="h3">
					<center>Choose a file from this excel/csv</center>
				</Typography>
				<Typography component="p">
					<center> And then execute</center>
				</Typography>
				<center>
					<input
						type="file"
						onChange={e => {
							this.handleChange(e.target.files);
						}}
					/>
				</center>
				<br />
				<br />
				<center>
					<Button> Execute </Button>
				</center>
			</Paper>
		</div>
	);
}
