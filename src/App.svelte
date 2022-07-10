<script>
import {
    Router,
    Link,
    Route
} from "svelte-routing";

import Header from "./components/Header.svelte";
import Home from "./views/Home.svelte";
import Line from "./views/Line.svelte";

export let url = "";
</script>

<Router url="{url}">
    <div class="main-content flex-grow-1 pr-lg-3 pl-lg-0 px-2 ml-4">
        <main class="pt-3">
            <Header/>
            <Route path="/linea/:id" let:params><Line lineId="{params.id}" /></Route>
            <Route path="/"><Home /></Route>
        </main>
    </div>
</Router>
	