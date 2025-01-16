import { JsonPipe } from "@angular/common";
import type { ModelSignal } from "@angular/core";
import { Component, inject, model, resource } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FileService } from "./file.service";

/**
 *
 */
@Component({
    imports: [FormsModule, JsonPipe],
    selector: "app-folder-scan",
    templateUrl: "./folder-scan.component.html",
})
export class FolderScanComponent {
    /** */
    private fileService: FileService = inject(FileService);

    /** */
    public $folderPath: ModelSignal<string> = model<string>(".data");

    /** */
    $jsonFiles = resource({
        loader: ({ request }) => window.app.loadJsonFiles(request.path),
        request: () => ({ path: this.$folderPath() }),
    });

    /**
     *
     */
    async scanFolder() {
        const files = await window.app.loadJsonFiles("klarka");
        console.log("Files:", files);
    }
}
