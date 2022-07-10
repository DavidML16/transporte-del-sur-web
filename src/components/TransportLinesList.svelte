<script>
import {
    onMount
} from "svelte";
import {
    Router,
    Link,
    Route
} from "svelte-routing";

let transportLines = [];
let filteredTransportLines = [];
let search = '';

$: {
    if(search != '') {
        filteredTransportLines = transportLines.filter(item => item.codigo.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    } else {
        filteredTransportLines = transportLines;
    }
}

onMount(async () => {
    fetch("https://api.ctan.es/v1/Consorcios/2/lineas")
        .then(response => response.json())
        .then(data => {
            transportLines = data.lineas;
        }).catch(error => {
            console.log(error);
            return [];
        });
});
</script>

<div class="row">
    <div class="col-12 pb-3 px-0">
        <div class="store bg-white rounded">
            <div class="store-wrapper p-5 bg-black no-background">
                <h1 class="sub-title-16 text-blue mt-2 text-center">Líneas de transporte</h1>
                <div class="searchbar rounded-top pb-2 d-flex align-items-center">
                    <div class="input-group bg-white-3 input-group-with-button" style="width: auto !important;">
                        <input type="text" class="form-control" name="name" id="line" placeholder="Nombre" bind:value={search}>
                        <label for="leaderboard-search-player">Buscar línea</label>
                    </div>
                </div>
                <p class="noselect"></p>
                <ul class="row list-unstyled">
                         
                    {#if transportLines.length > 0}
                        
                        {#each filteredTransportLines as transportLine}
                                    
                            <li class="col-12 col-lg-3 store-server store-server-green">
                                <Link to="/linea/{transportLine.idLinea}" class="store-product p-5 text-left rounded d-flex align-items-center">
                                    <div class="group ml-3 d-flex justify-content-between align-items-center w-100">
                                        <div class="sub-group">
                                            <div class="store-product-head">
                                                <div class="store-product-head-title font-size-16 font-800 line-height-1">{transportLine.codigo}</div>
                                            </div>
                                        </div>
                                        <button class="btn btn-norm-padding mb-0 d-lg-flex d-none"> <ion-icon name="arrow-forward" role="img" class="md hydrated" aria-label="arrow forward"></ion-icon> </button>
                                    </div>
                                </Link>
                            </li>

                        {/each}

                    {/if}

                </ul>
            </div>
        </div>
    </div>
</div>
