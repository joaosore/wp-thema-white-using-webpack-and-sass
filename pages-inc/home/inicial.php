<?php 

?>

<section class="inicial">
	<div class="box-img">
		<img class="d-none d-lg-block img-fluid" src="<?php echo get_field("fundo-desktop", get_the_ID()); ?>">
		<img class="d-block d-lg-none img-fluid" src="<?php echo get_field("fundo-mobile", get_the_ID()); ?>">
	</div>
	<div class="container block-mobile">
		<div class="row">
			<div class="col-lg-6">
				<div>
					<?php echo get_field("descricao", get_the_ID()); ?>
					<a class="btn-instaladores" href="#onde-encontrar">
						<div class="button-custon-1">
							<span><?php echo get_field("clique_aqui", get_the_ID()); ?></span>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>