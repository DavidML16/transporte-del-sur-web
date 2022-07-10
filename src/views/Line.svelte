<script>
export let lineId;

let direction = 0;
let planificatorIndex = 0;

function changeDirection() {
    direction = direction == 0 ? 1 : 0;
}

import {
    onMount
} from "svelte";
import {
    Link
} from "svelte-routing";

let result = [];
let blocks = [];
let cores = [];
let schedule = [];
let dates = [];

$: {
    if(result.planificadores && result.planificadores.length) {
        if(direction == 0) {
            blocks = result.planificadores[planificatorIndex].bloquesIda;
            cores = result.planificadores[planificatorIndex].nucleosIda;
            schedule =  result.planificadores[planificatorIndex].horarioIda;
        } else {
            blocks = result.planificadores[planificatorIndex].bloquesVuelta;
            cores = result.planificadores[planificatorIndex].nucleosVuelta;
            schedule =  result.planificadores[planificatorIndex].horarioVuelta;
        }
        dates = [result.planificadores[planificatorIndex].fechaInicio, result.planificadores[planificatorIndex].fechaFin];
    }
}

onMount(async () => {
    fetch("https://api.ctan.es/v1/Consorcios/2/horarios_lineas?linea=" + lineId)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            result = data;
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

                <h1 class="sub-title-16 text-blue mt-2 text-center">
                    Horario

                    {#if cores.length >= 2}
                        de { cores[0].nombre } a { cores[cores.length - 1].nombre }
                    {/if}
                </h1>

                {#if result.planificadores && result.planificadores.length > 0}

                <div class="row d-flex justify-content-center">

                    <Link class="btn bg-orange mt-4 ml-8 mr-8" to="/"> 
                        <ion-icon class="mr-2 md hydrated" name="arrow-back-outline"></ion-icon>
                        Volver al inicio
                    </Link>

                    <p class="mt-5">
                        El horario entró en vigor el { dates[0] }
                        {#if dates[1] != ''}
                            y finaliza el { dates[1] }
                        {/if}
                    </p>

                    <div class="btn bg-orange mt-4 ml-8 mr-8" on:click={changeDirection}> 
                        <ion-icon name="arrow-up-outline"></ion-icon>
                        <ion-icon class="mr-2 md hydrated" name="arrow-down-outline"></ion-icon>
                        Cambiar dirección 
                    </div>

                </div>

                <br/>

                <div class="table-wrapper bg-blue">

                    <div class="table-responsive-lg ">

                        <table class="table tab-pane fade show active" id="table" role="tabpanel" aria-labelledby="table-tab">
                            <thead>
                                <tr>
                                    {#each blocks as block }
                                    {#if block.tipo != 2 }
                                    <th scope="col">{ block.nombre }</th>
                                    {/if}
                                    {/each}
                                </tr>
                            </thead>
                            <tbody>
                                {#each schedule as scheduleBlock, i}
                                <tr>
                                    {#each schedule[i].horas as hora}
                                    <td>{ hora }</td>
                                    {/each}
                                    <td>{ schedule[i].frecuencia }</td>
                                </tr>
                                {/each}
                            </tbody>
                        </table>

                    </div>

                </div>

                {:else}

                <div class="row d-flex justify-content-center">

                    

                </div>

                {/if}

            </div>
        </div>
    </div>
</div>
