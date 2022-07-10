<script>
import {
    Link
} from "svelte-routing";
</script>

<div class="header-wrapper row">
    <header class="d-flex justify-content-between p-4 bg-blue color-shadow rounded col-lg-9 col-12 abstract-bg">
        <div class="title d-flex align-items-center pl-lg-4">
            <div class="responsive-text d-flex flex-wrap align-items-center justify-content-start p-lg-0 p-5">
                <h3 class="mr-3 mb-0 font-size-16">TRANSPORTE DEL SUR</h3>
                <p class="w-50 font-size-7 mb-0 d-block">Consulte fácilmente líneas, horarios, rutas, y más del transporte interurbano andaluz</p>
            </div>
        </div>
        <img class="header-logo mb-n5 mt-3" src="/logo.png" alt="logo">
    </header>
    <div class="ip-wrapper pl-lg-3 pr-lg-0 px-0 col-12 col-lg-3">
        <button class="btn bg-orange flex-column p-4 px-5 h-100 btn-block abstract2-bg-b">
            <div class="btn-text">
                <div class="title font-size-7 font-700 o-50 mb-0 line-height-1">Diseñado y creador por:</div>
                <span class="text font-size-12 mb-1">David Morales Olvera</span>
            </div>
        </button>
    </div>
</div>
<nav class="nav header-nav bg-white-2 border-white-3">
    <ul class="navbar-nav w-100 flex-row px-2">
        <li class="nav-item">
            <Link to="/" class="py-4 px-4 nav-link text-color d-flex align-items-center">
                <ion-icon name="bus" class="mr-2 md hydrated" role="img" aria-label="bus"></ion-icon>
                <span>Inicio</span>
            </Link>
        </li>
    </ul>
</nav>
<br/>
