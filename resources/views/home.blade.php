@extends('spark::layouts.app')

@section('content')
<home :user="user" inline-template>
    <div class="container">
        <!-- Application Dashboard -->
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>

                    <div class="panel-body">
                        Your application's dashboard.
                         <canvas id="canvas" width="500" height="500" style="border:1px solid #aaa" v-on:click="clicked()" >

                         </canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</home>
@endsection
