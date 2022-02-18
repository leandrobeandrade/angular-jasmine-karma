```
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogRef, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { TagoutLockTypeService, TagoutProcedureService, TagoutProcedureStatusService } from '@core/api/lockout-tagout';
import { ITagoutApprovalStatusModel, ITagoutCategoryProceduresModel, ITagoutLockTypeModel, 
  ITagoutProcedureModel, ITagoutProcedureModelPOST, ITagoutProcedureStatusModel } from '@core/data/lockout-tagout';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-instruction-form',
  templateUrl: './instruction-form.component.html',
  styleUrls: ['./instruction-form.component.scss'],
  providers: [
    TagoutProcedureService,
    TagoutLockTypeService,
    TagoutProcedureStatusService,
  ],
})
export class InstructionFormComponent implements OnInit {
  tagoutId: number;
  procedureModel: ITagoutProcedureModelPOST;
  lockTypes: ITagoutLockTypeModel[] = [];
  alive: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialogRef: NbDialogRef<string>,
    private procedureService: TagoutProcedureService,
    private lockTypeService: TagoutLockTypeService,
    private toastrService: NbToastrService,
    private statusService: TagoutProcedureStatusService
  ) {}

  ngOnInit() {
    this.procedureModel = new ITagoutProcedureModelPOST();
    this.procedureModel.procedure = new ITagoutProcedureModel();
    this.procedureModel.procedure.lockType = new ITagoutLockTypeModel();
    this.procedureModel.procedure.categoryProcedure =
      new ITagoutCategoryProceduresModel();

    this.procedureModel.id = this.tagoutId; // Procedure is relationed a tagout

    this.lockTypeService.listLockTypes().subscribe((lockTypes) => {
      this.lockTypes = lockTypes.dataArray;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  chosenType(type: ITagoutLockTypeModel) {
    this.procedureModel.procedure.lockType.id = type.id;
    this.createProcedure();
  }

  createProcedure() {
    this.procedureService
      .addProcedure(this.procedureModel)
      /*.pipe(
        mergeMap((resp) =>
          this.setStatusToDevelopment((resp.data as ITagoutProcedureModel).id)              /*********** RETIRADO ***********/
        )
      )*/
      .subscribe(() => {
        this.toastrService.show(
          'Mapa de Bloqueio criado com sucesso',
          'Criado',
          {
            position: NbGlobalPhysicalPosition.TOP_RIGHT,
            status: 'success',
          }
        );
        this.modalClose(true);
      });
  }

  /*********** 
    Essa funcionalidade foi retirada - Criava o status (4 - development) do procedimento junto com o procedimento
  ***********/ 

  /*setStatusToDevelopment(procedureId: number) {
    const status = new ITagoutProcedureStatusModel();
    status.procedure = new ITagoutProcedureModel();
    status.maintenanceApproverApprovalStatus = new ITagoutApprovalStatusModel();
    status.ehsApproverApprovalStatus = new ITagoutApprovalStatusModel();

    status.procedure.id = procedureId;
    status.maintenanceApproverApprovalStatus.id = 4; // Set to development
    status.ehsApproverApprovalStatus.id = 4;

    return this.statusService.addProcedureStatus(status);
  }*/

  modalClose(refresh?: boolean) {
    this.dialogRef.close(refresh);
  }
}
