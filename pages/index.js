import TodoList from '../components/TodoList';
import App, { Container } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from 'next/head';
import Header from '../components/Layout/Header';

export default () => {
    return (
        <Container>
            <Head>
                <title>Todo List App</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width shrink-to-fit=no" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            </Head>
            <CssBaseline />
            <Header />
            <TodoList />
      </Container>
    )
}