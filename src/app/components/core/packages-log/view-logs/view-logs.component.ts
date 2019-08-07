import { Component, OnInit, HostListener } from '@angular/core';

import { PackagesLogService, ProgressBarService } from '../../../../services';

@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.component.html',
  styleUrls: ['./view-logs.component.css']
})
export class ViewLogsComponent implements OnInit {
  public logText;

  constructor(private packagesLogService: PackagesLogService,
    private ngProgress: ProgressBarService) { }

  ngOnInit() {
  }

  public toggleModal(isOpen: Boolean, link: string) {
    const view_logs = <HTMLDivElement>document.getElementById('view_logs');
    if (isOpen) {
      this.getLogs(link);
      view_logs.classList.add('is-active');
      return;
    }
    this.logText = '';
    view_logs.classList.remove('is-active');

    const activeDropDown = Array.prototype.slice.call(document.querySelectorAll('.dropdown.is-active'));
    if (activeDropDown.length > 0) {
      activeDropDown[0].classList.remove('is-active');
    }
  }

  public async getLogs(logLink: string): Promise<void> {
    this.ngProgress.start();
    const logContent = await this.packagesLogService.getLog(logLink);
    this.logText = await (new Response(logContent)).text();
    this.ngProgress.done();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.toggleModal(false, null);
    }
  }
}
