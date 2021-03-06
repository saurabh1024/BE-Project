import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./auth.service";
import { LoadingController } from "@ionic/angular";

@Component({
	selector: "app-auth",
	templateUrl: "./auth.page.html",
	styleUrls: ["./auth.page.scss"]
})
export class AuthPage implements OnInit {
	isLoading = false;

	constructor(
		private authService: AuthService,
		private router: Router,
		private loadingctrl: LoadingController
	) {}

	ngOnInit() {}

	onSubmit() {
		this.isLoading = true;
		this.authService.login();
		this.loadingctrl
			.create({ keyboardClose: true, message: "Logging In..." })
			.then((loadingEl) => {
				loadingEl.present();
				setTimeout(() => {
					this.isLoading = false;
					loadingEl.dismiss();
					this.router.navigateByUrl("/products/tabs/discover");
				}, 1500);
			});
	}
}
