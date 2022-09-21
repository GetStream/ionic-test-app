import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import {
  ChatClientService,
  ChannelService,
  StreamI18nService,
} from "stream-chat-angular";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService
  ) {
    const apiKey = environment.apiKey;
    const userId = environment.userId;
    const userToken = environment.userToken;
    this.chatService.init(apiKey, userId, userToken);
    this.streamI18nService.setTranslation();
  }

  async ngOnInit() {
    this.channelService.init({
      type: "messaging",
      id: { $in: [environment.channelId] },
    });
  }
}
