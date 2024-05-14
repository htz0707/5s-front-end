import classes from "@/styles/layout.module.css";

export default function Layout({ children, background }) {
  return (
    <main className={classes.wrapper}>
      <section
        className={classes.container}
        style={{ backgroundImage: background }}
      >
        {children}
      </section>
    </main>
  );
}
