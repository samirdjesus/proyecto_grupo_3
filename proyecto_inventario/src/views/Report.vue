<template>
    <div>
        <!-- Notifications area -->
        <app-notification></app-notification>
        <!-- navBar -->
        <app-navbar></app-navbar>
        <!-- navLateral -->
        <app-navlateral></app-navlateral>
        <!-- pageContent -->
        <section class="full-width pageContent">
            <!-- ESTADÍSTICAS E INFORME DE INVENTARIO -->
            <section class="full-width text-center" style="padding: 40px 0;">
                <h3 class="text-center tittles">ESTADÍSTICAS E INFORME DE INVENTARIO</h3>
            </section>
            <!-- Valoración del inventario actual -->
            <section class="full-width text-center" style="padding: 10px 0;">
                <h4 class="text-center tittles">Valoración del inventario actual</h4>
                <!-- Tiles -->
                <article class="full-width tile">
                    <div class="tile-text">
                        <span class="text-condensedLight">
                            <!-- 2<br> -->
                            <small>Potencial de ganancia</small>
                            <h5 style="font-weight:bold;">$ 1.485.600</h5>
                        </span>
                    </div>
                    <i class="zmdi zmdi-account tile-icon"></i>
                </article>
                <article class="full-width tile">
                    <div class="tile-text">
                        <span class="text-condensedLight">
                            <!-- 71<br> -->
                            <small>Valor total comercial</small>
                            <h5 style="font-weight:bold;">$ 12.380.000</h5>
                        </span>
                    </div>
                    <i class="zmdi zmdi-accounts tile-icon"></i>
                </article>
                <article class="full-width tile">
                    <div class="tile-text">
                        <span class="text-condensedLight">
                            <!-- 7<br> -->
                            <small>Valor total de venta</small>
                            <h5 style="font-weight:bold;">$ 13.865.600</h5>
                        </span>
                    </div>
                    <i class="zmdi zmdi-truck tile-icon"></i>
                </article>
            </section>
            <!-- Productos con mayor rotación -->
            <section class="full-width text-center" style="margin: 10px 0;">
                <h4 class="text-center tittles">Productos con mayor rotación</h4>
                <!-- Tiles -->
                <button class="button button1" style="margin: 10px 30px">Última semana</button>
                <button class="button button2" style="margin: 10px 30px">Último mes</button>
                <button class="button button3" style="margin: 10px 30px">Último semestre</button>
                <button class="button button4" style="margin: 10px 30px">Último año</button>
                <div class="container">
                    <div class="row">
                        <!-- Pie Chart -->
                        <div class="col col-lg-6"><GoogleChart /></div>
                        <!-- Table product information -->
                        <div class="col align-self-center">               
                            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                                <thead>
                                    <tr>
                                        <th colspan="2" style="text-align: center">Producto 1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Total vendido</td>
                                        <td>235 unidades</td>
                                    </tr>
                                    <tr>
                                        <td>Total ganancia</td>
                                        <td>$157.890</td>
                                    </tr>
                                    <tr>
                                        <td>Volumen de venta</td>
                                        <td>70%</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Alarmas de inventario: cantidad mínima y fechas de vencimiento -->
            <section class="full-width text-center" style="padding: 5px 0;">
                <h4 class="text-center tittles">Alarmas de inventario: cantidad mínima y fechas de vencimiento</h4>
                <div class="container">
                    <div class="row">
                        <!-- Tabla: Productos con cantidad mínima-->
                        <div class="col align-self-center">
                            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                                <thead>
                                    <tr>
                                        <th colspan="2" style="text-align: center">Producto 1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Total vendido</td>
                                        <td>235 unidades</td>
                                    </tr>
                                    <tr>
                                        <td>Total ganancia</td>
                                        <td>$157.890</td>
                                    </tr>
                                    <tr>
                                        <td>Volumen de venta</td>
                                        <td>70%</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <!-- Tabla: Productos próximos a vencer-->
                        <div class="col">
                            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                                <thead>
                                    <tr>
                                        <th colspan="2" style="text-align: center">Producto 1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Total vendido</td>
                                        <td>235 unidades</td>
                                    </tr>
                                    <tr>
                                        <td>Total ganancia</td>
                                        <td>$157.890</td>
                                    </tr>
                                    <tr>
                                        <td>Volumen de venta</td>
                                        <td>70%</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>


        </section>
    </div>
</template>

<script>
import AppNotification from '@/components/AppNotification.vue';
import AppNavbar from '@/components/AppNavbar.vue';
import AppNavlateral from '@/components/AppNavlateral.vue';
import GoogleChart from '../components/GoogleChart.vue'

export default{
    name: 'inventory',
    components: {
        AppNotification,AppNavbar,AppNavlateral,GoogleChart
    }
}
</script>