import { Controller, Post, Get, Delete } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}
  @Post()
  createWorkspace() {}
  @Get(':url/members')
  getAllMembersFromWorkspace() {}
  @Post(':url/members')
  inviteMembersToWorkspace() {}
  @Delete(':url/members/:id')
  KickMembersFromWorkspace() {}
  @Get(':url/members/:id')
  getMemberInfoWorkspace() {}
}
