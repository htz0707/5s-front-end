import classes from "@/styles/layout.module.css";

export default function CenterDiv({ children, top }) {
  return (
    <div className={classes.center} style={{ top }}>
      {children}
    </div>
  );
}
