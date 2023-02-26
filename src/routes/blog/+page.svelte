<script lang="ts">
    import type {PageData} from './$types';
    export let data: PageData;
</script>
<p></p>
<body>
    <h1 class = "h">BLOG</h1>
<div class="container text-center" id="con1">
    <div class="row">
        {#each data.texts as dt}
        
            <div class="col">
                <a href="/blog/{dt.id}" id="blogtextarr">
                <img src="img/blog1.png" alt="I LOVE WOO WAK GOOD" width="360px"><br>
                
                <h3>{dt.name}</h3>
                </a>
            </div>
        
        {/each}
    </div>
</div>
</body>

<style>
    #blogtextarr{
        text-decoration: none;
        color: rgb(27, 27, 27);
    }
    .h{
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>

