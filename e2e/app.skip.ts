import { browser, by, element } from 'protractor';
import { environment } from './environment';

export class SkipLogin {
  EC = browser.ExpectedConditions;

  navigateToHome() {
    return browser.get('/');
  }

  setUpInstance() {
    browser.waitForAngularEnabled(false);
    element(by.css('app-login .has-text-grey a:nth-child(2)')).click();
    element(by.id('protocol')).sendKeys(environment.PROTOCOL);
    element(by.id('host')).clear();
    element(by.id('host')).sendKeys(environment.HOST);
    element(by.id('service_port')).clear();
    element(by.id('service_port')).sendKeys(environment.SERVICE_PORT);
    element(by.css('app-settings button.button.is-primary')).click();
    browser.waitForAngularEnabled(true);
  }

  getNavTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('#app .navbar-brand .navbar-item.is-hidden-mobile b')).getText();
  }

  clickSkip() {
    browser.ignoreSynchronization = true;
    element(by.css('app-login .is-grouped div:nth-child(1) button')).click();
  }

  getCountOfSelectedGraph() {
    browser.ignoreSynchronization = true;
    // wait
    browser.wait(this.EC.visibilityOf(element(by.css('angular2-multiselect .selected-list .c-list'))), 2000);
    return element.all(by.css('angular2-multiselect .selected-list .c-list div')).count();
  }

  getReadingsGraph() {
    browser.ignoreSynchronization = true;
    // wait
    browser.wait(this.EC.visibilityOf(element(by.css('app-dashboard div:nth-child(3) div article h5'))), 2000);
    return element(by.css('app-dashboard div:nth-child(3) div article h5')).getText();
  }

  getSent1Graph() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-dashboard div:nth-child(4) div article h5')).getText();
  }

  getPurgedGraph() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-dashboard div:nth-child(5) div article h5')).getText();
  }

  getAppStatus() {
    browser.ignoreSynchronization = true;
    return element(by.css('.navbar-item .tag.is-hidden-mobile')).getText();
  }

  navToAssetReadings() {
    return browser.get('/#/asset');
  }

  getAssetsTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-assets > div > div:nth-child(2) #card-title h5')).getText();
  }

  getAssetReadingsTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-assets > div > div:nth-child(3) #card-title h5')).getText();
  }

  getAssetsRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title > h5 > button > i')).isDisplayed();
  }

  navToAuditLogs() {
    return browser.get('/#/audit');
  }

  getAuditLogsTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .title.is-5')).getText();
  }

  isAuditLogRefreshIcon() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .fa.fa-refresh')).isDisplayed();
  }

  auditLogCount() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .subtitle.is-6')).getText();
  }

  getAuditLogsSelectTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-audit-log div:nth-child(1) select')).count();
  }

  getAuditLogRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .fa.fa-refresh')).isDisplayed();
  }

  getAuditLogsInputTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-audit-log input')).count();
  }

  navToSystemLogs() {
    return browser.get('/#/syslog');
  }

  getSystemLogTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title > div > div.column.is-9 > h5')).getText();
  }

  getSysLogRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .fa.fa-refresh')).isDisplayed();
  }

  systemLogCount() {
    browser.ignoreSynchronization = true;
    return element(by.css('#card-title .subtitle.is-6')).getText();
  }

  getSystemtLogSelectTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-system-log div:nth-child(1) select')).count();
  }

  getSystemLogInputTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-system-log input')).count();
  }

  navigateToConfig() {
    return browser.get('/#/configuration');
  }

  getConfigTitles() {
    browser.ignoreSynchronization = true;
    // wait
    browser.wait(this.EC.visibilityOf(element(by.css('app-root app-configuration-manager > div > div:nth-child(2)'))), 5*1000);
    return element(by.css('#app > app-root > ng-sidebar-container > div > div > app-configuration-manager > div')).getText();
  }

  isAddButtonPresent() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-configuration-manager > div > div:nth-child(2) > header > div:nth-child(2) > a')).isDisplayed();
  }

  isSaveButtonPresent() {
    browser.ignoreSynchronization = true;
    return element(by.id('btn-save-send_pr_1-plugin')).isDisplayed();
  }

  isCancelButtonPresent() {
    browser.ignoreSynchronization = true;
    return element(by.id('btn-cancel-send_pr_1-plugin')).isDisplayed();
  }

  navToScheduledTasks() {
    return browser.get('/#/scheduled-task');
  }

  getSchedulesTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-scheduled-process .card-header p.card-header-title')).getText();
  }

  getSchedulesRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-scheduled-process > div:nth-child(1) .fa.fa-refresh')).isDisplayed();
  }

  getCreateScheduleButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-scheduled-process .card-header .button.is-light')).getText();
  }

  getTasksTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-scheduled-process app-list-tasks header > div')).getText();
  }

  getTasksRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-scheduled-process > div:nth-child(2) .fa.fa-refresh')).isDisplayed();
  }

  getTasksSelectTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.id('task-state')).count();
  }

  navToServiceHealth() {
    return browser.get('/#/services-health');
  }

  getServiceStatusTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-services-health .title.is-5')).getText();
  }

  getServiceStatusRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-services-health header button .fa.fa-refresh')).isDisplayed();
  }

  getServiceHealthColNames() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-services-health table thead tr')).getText();
  }

  navToCertificateStore() {
    return browser.get('/#/certificate');
  }

  getCertificateStoreTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('cert-store > div > div > header > p')).getText();
  }

  getCertificateStoreRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('cert-store button i')).isDisplayed();
  }

  getCertificateStoreColNames() {
    browser.ignoreSynchronization = true;
    return element(by.css('cert-store table thead tr')).getText();
  }

  getCertificateStoreImport() {
    browser.ignoreSynchronization = true;
    return element(by.css('cert-store header a')).getText();
  }

  navToBackupRestore() {
    return browser.get('/#/backup-restore');
  }

  getBackupRestoreTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-backup-restore header p')).getText();
  }

  getBackupRestoreRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-backup-restore button i')).isDisplayed();
  }

  getBackupRestoreColNames() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-backup-restore table thead tr')).getText();
  }

  getRequestBackup() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-backup-restore header a')).getText();
  }

  navToSupportBundles() {
    return browser.get('/#/support');
  }

  getSupportBundlesTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-support header p')).getText();
  }

  getSupportBundlesRefreshButton() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-support button i')).isDisplayed();
  }

  getRequestNewBundle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-support header a')).getText();
  }

  navToSettings() {
    return browser.get('/#/setting');
  }

  getSettingsTitle() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-settings header p')).getText();
  }

  getSettingsSelectTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-settings .column .select')).count();
  }

  getSettingsInputTag() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-settings div input')).count();
  }

  getSettingsButton() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-settings button')).count();
  }

  getLoginLink() {
    browser.ignoreSynchronization = true;
    return element(by.css('app-settings a.button')).getText();
  }

  getPingDropdown() {
    browser.ignoreSynchronization = true;
    return element.all(by.css('app-settings header div.select.is-small')).count();
  }
}
