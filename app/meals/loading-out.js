import classes from './loading.module.css';

// Inactive for loading case because its now named loading-out instead of loading

export default function MealsLoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
