import { Component } from '@angular/core';
import { LthnWalletHeaderComponent } from '../../components/lthn-wallet/header/lthn-wallet-header.component';
import { LthnWalletReceiveComponent } from '../../components/lthn-wallet/lthn-wallet-receive/lthn-wallet-receive.component';
import { LthnWalletSendComponent } from '../../components/lthn-wallet/lthn-wallet-send/lthn-wallet-send.component';
import { LthnWalletSettingsComponent } from '../../components/lthn-wallet/lthn-wallet-settings/lthn-wallet-settings.component';
import { LthnWalletTransactionsComponent } from '../../components/lthn-wallet/lthn-wallet-transactions/lthn-wallet-transactions.component';
import { LthnNewWalletComponent } from '../../components/lthn-wallet/lthn-new-wallet/lthn-new-wallet.component';
import { LthnExistingWalletComponent } from '../../components/lthn-wallet/lthn-existing-wallet/lthn-existing-wallet.component';

@Component({
  selector: 'app-lethean',
  imports: [LthnWalletHeaderComponent, LthnWalletReceiveComponent, LthnWalletSendComponent, LthnWalletSettingsComponent, LthnWalletTransactionsComponent, LthnNewWalletComponent, LthnExistingWalletComponent],
  templateUrl: './lethean.component.html',
  styleUrl: './lethean.component.css'
})
export class LetheanComponent {

}
